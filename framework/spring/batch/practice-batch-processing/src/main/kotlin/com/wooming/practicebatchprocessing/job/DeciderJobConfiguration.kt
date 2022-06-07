package com.wooming.practicebatchprocessing.job

import com.wooming.practicebatchprocessing.util.logger
import jdk.nashorn.internal.runtime.regexp.joni.Config.log
import org.springframework.batch.core.Job
import org.springframework.batch.core.JobExecution
import org.springframework.batch.core.Step
import org.springframework.batch.core.StepExecution
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory
import org.springframework.batch.core.job.flow.FlowExecutionStatus
import org.springframework.batch.core.job.flow.JobExecutionDecider
import org.springframework.batch.repeat.RepeatStatus
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import kotlin.random.Random

@Configuration
class DeciderJobConfiguration(
    private val jobBuilderFactory: JobBuilderFactory,
    private val stepBuilderFactory: StepBuilderFactory
) {
    val log = logger()

    @Bean
    fun deciderJob(): Job {
        return jobBuilderFactory.get("deciderJob")
            .start(startStep())
            .next(decider())
            .from(decider())
            .on("ODD")
            .to(oddStep())
            .from(decider())
            .on("EVEN")
            .to(evenStep())
            .end()
            .build()
    }

    @Bean
    fun startStep(): Step {
        return stepBuilderFactory.get("startStep")
            .tasklet { contribution, chunkContext ->
                log.info(">>>>> Start!")
                RepeatStatus.FINISHED;
            }.build()
    }

    @Bean
    fun evenStep(): Step {
        return stepBuilderFactory.get("evenStep")
            .tasklet { contribution, chunkContext ->
                log.info(">>>>> 짝수 입니다!")
                RepeatStatus.FINISHED
            }.build()
    }

    @Bean
    fun oddStep(): Step {
        return stepBuilderFactory.get("oddStep")
            .tasklet { contribution, chunkContext ->
                log.info(">>>>> 홀수 입니다!")
                RepeatStatus.FINISHED
            }.build()
    }

    @Bean
    fun decider(): JobExecutionDecider {
        return OddDecider()
    }

    companion object {
        open class OddDecider: JobExecutionDecider {
            private val log = logger()
            override fun decide(jobExecution: JobExecution, stepExecution: StepExecution?): FlowExecutionStatus {
                val rand = Random

                val randomNumber = rand.nextInt(50) + 1
                log.info("랜덤숫자: $randomNumber")

                if(randomNumber % 2 == 0) {
                    return FlowExecutionStatus("EVEN")
                } else {
                    return FlowExecutionStatus("ODD")
                }
            }

        }
    }
}
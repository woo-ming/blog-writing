package com.wooming.practicebatchprocessing.job

import com.wooming.practicebatchprocessing.util.logger
import org.springframework.batch.core.ExitStatus
import org.springframework.batch.core.Job
import org.springframework.batch.core.Step
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory
import org.springframework.batch.repeat.RepeatStatus
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class StepNextConditionalJobConfiguration(
    private val jobBuilderFactory: JobBuilderFactory,
    private val stepBuilderFactory: StepBuilderFactory
)
{
    val log = logger()

    @Bean
    fun stepNextConditionalJob(): Job {
        return jobBuilderFactory.get("stepNextConditionalJob")
            .start(conditionalJobStep1())
                .on(ExitStatus.FAILED.exitCode)
                .to(conditionalJobStep3())
                .on("*")
                .end()
            .from(conditionalJobStep1())
                .on("*")
                .to(conditionalJobStep2())
                .next(conditionalJobStep3())
                .on("*")
                .end()
            .end()
            .build()

    }

    @Bean
    fun conditionalJobStep1(): Step {
        return stepBuilderFactory.get("step1")
            .tasklet { contribution, chunkContext ->
                log.info(">>>>> This is StepNextConditionalJob Step1")
//                contribution.exitStatus = ExitStatus.FAILED
                RepeatStatus.FINISHED
            }.build()
    }

    @Bean
    fun conditionalJobStep2(): Step {
        return stepBuilderFactory.get("conditionalJobStep2")
            .tasklet { contribution, chunkContext ->
                log.info(">>>>> This is stepNextConditionalJob Step2")
                RepeatStatus.FINISHED
            }.build()
    }

    @Bean
    fun conditionalJobStep3(): Step {
        return stepBuilderFactory.get("conditionalJobStep3")
            .tasklet { contribution, chunkContext ->
                log.info(">>>>> This is conditionalJob Step3")
                RepeatStatus.FINISHED
            }.build()
    }

}
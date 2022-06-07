package com.wooming.practicebatchprocessing.job

import com.wooming.practicebatchprocessing.util.logger
import org.springframework.batch.core.Job
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory
import org.springframework.batch.core.configuration.annotation.JobScope
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory
import org.springframework.batch.core.step.tasklet.TaskletStep
import org.springframework.batch.repeat.RepeatStatus
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.lang.IllegalArgumentException

@Configuration
class SimpleJobConfiguration (
    val jobBuilderFactory: JobBuilderFactory,
    val stepBuilderFactory: StepBuilderFactory
        ){
    private val log = logger()

    @Bean
    fun simpleJob(): Job {
        return jobBuilderFactory.get("simpleJob")
            .start(simpleStep1(requestDate = null))
            .next(simpleStep2(requestDate = null)).build();
    }

    @Bean
    @JobScope
    fun simpleStep1(@Value("#{jobParameters[requestDate]}")requestDate: String?): TaskletStep {
        return stepBuilderFactory.get("simpleStep1")
            .tasklet { contribution, chunkContext ->
                log.info(">>>> This is Step1!")
                log.info(">>>> requestDate = $requestDate")
                RepeatStatus.FINISHED
            }.build()
    }

    @Bean
    @JobScope
    fun simpleStep2(@Value("#{jobParameters[requestDate]}")requestDate: String?): TaskletStep {
        return stepBuilderFactory.get("simpleStep2")
            .tasklet { contribution, chunkContext ->
                log.info(">>>> This is Step2!")
                log.info(">>>> requestDate = $requestDate")
                RepeatStatus.FINISHED
            }.build()
    }
}
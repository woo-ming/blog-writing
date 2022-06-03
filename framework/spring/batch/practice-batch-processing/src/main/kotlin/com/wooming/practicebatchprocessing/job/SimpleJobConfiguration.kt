package com.wooming.practicebatchprocessing.job

import com.wooming.practicebatchprocessing.util.logger
import org.springframework.batch.core.Job
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory
import org.springframework.batch.core.step.tasklet.TaskletStep
import org.springframework.batch.repeat.RepeatStatus
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class SimpleJobConfiguration (
    val jobBuilderFactory: JobBuilderFactory,
    val stepBuilderFactory: StepBuilderFactory
        ){
    private val log = logger()

    @Bean
    fun simpleJob(): Job {
        return jobBuilderFactory.get("simpleJob").start(simpleStep1()).build();
    }

    @Bean
    fun simpleStep1(): TaskletStep {
        return stepBuilderFactory.get("simpleStep1")
            .tasklet { contribution, chunkContext ->
                log.info("#### This is Step1!")
                RepeatStatus.FINISHED
            }.build()
    }
}
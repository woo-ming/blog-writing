# Spring Batch

## Batch vs Scheduler

## Job, Step, Tasklet, Reader, Processor, Writer

## BatchStatus, ExitStatus

### 1. BatchStatus

- Batch Status는 Job 또는 Step의 실행 결과를 Spring에서 기록할 때 사용하는 Enum이다.
- COMPLETED, STARTING, STARTED, STOPPING, STOPPED, FAILED, ABANDONED, UNKNOWN 이 있다.

### 2. ExitStatus

- Spring Batch는 기본적으로 ExitStatus의 ExitCode는 Step의 BatchStatus와 같도록 설정이 되어있다.

## @StepScope & @JobScope

- Spring Batch Component (Tasklet, ItemReader, ItemWriter, ItemProcessor 등)에 @stepScope를 사용하게 되면 Step의 실행 시점에 해당 컴포넌트를 Spring Bean으로 생성한다.
- @JobScope는 Job실행시점에 Bean이 생성 된다. 즉, Bean의 생성 시점을 지정된 Scope가 실행되는 시점으로 지연 시킨다.

# References

- [향로님 블로그 - 1. Spring Batch 가이드 - 배치 어플리케이션이란? ](https://jojoldu.tistory.com/324?category=902551)
- [향로님 블로그 - 2. Spring Batch 가이드 - Batch Job 실행해보기 ](https://jojoldu.tistory.com/325?category=902551)
- [향로님 블로그 - 3. Spring Batch 가이드 - 메타테이블엿보기 ](https://jojoldu.tistory.com/326?category=902551)
- [향로님 블로그 - 4. Spring Batch 가이드 - Spring Batch Job Flow ](https://jojoldu.tistory.com/328?category=902551)
- [향로님 블로그 - 5. Spring Batch 가이드 - Spring Batch Scope & Job Parameter ](https://jojoldu.tistory.com/330?category=902551)

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatMiddleware } from './middlewares/cat.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { AllRoutesMiddleware } from './middlewares/global.middleware';
import { functionalMiddleware } from './middlewares/function.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { GlobalFilter } from './filters/global.filter';
import { GlobalInterceptor } from './Interceptors/global.interceptor';
import { GlobalGuard } from './guards/global.guard';
import { GlobalPipe } from './pipes/global.pipe';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: GlobalGuard,
    },
    {
      provide: APP_PIPE,
      useClass: GlobalPipe,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CatMiddleware).forRoutes(CatsController);
    consumer.apply(AllRoutesMiddleware).forRoutes('*');
    consumer
      .apply(functionalMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}

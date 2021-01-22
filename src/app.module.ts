import { Module } from '@nestjs/common';
import { ApplicationModule } from './aplication/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [
    ApplicationModule,
    ControllerModule,
    InfrastructureModule
  ],

})
export class AppModule {}

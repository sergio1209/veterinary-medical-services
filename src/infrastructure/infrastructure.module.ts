import { DatabaseModule } from './database/database.module';
import { UnitOfWork } from './base/unit.of.work';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [UnitOfWork],
  exports: [UnitOfWork]
})
export class InfrastructureModule{}
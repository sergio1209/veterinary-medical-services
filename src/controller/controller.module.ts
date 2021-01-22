import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ApplicationModule } from '../aplication/application.module';
import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { VeterinarianController } from './veterinarian.controller';
import { PetController } from './pet.controller';
import { ProductController } from './product.controller';

@Module({
  imports: [
    InfrastructureModule,
    ApplicationModule
  ],
  controllers: [
    ClientController,
    VeterinarianController,
    PetController,
    ProductController
  ]

})
export  class ControllerModule{}
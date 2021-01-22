import { Module } from '@nestjs/common';
import { RegisterClientService } from './client/register.client.service';
import { RegisterPetService } from './pet/register.pet.service';
import { RegisterProductService } from './product/register.product.service';
import { RegisterVeterinarianService } from './veterinarian/register.veterinarian.service';

@Module({
  imports: [
    RegisterClientService,
    RegisterPetService,
    RegisterProductService,
    RegisterVeterinarianService
  ],
  exports: [
    RegisterClientService,
    RegisterPetService,
    RegisterProductService,
    RegisterVeterinarianService
  ]
})
export class ApplicationModule{}
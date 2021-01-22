import { Body, Controller, Post } from '@nestjs/common';
import { UnitOfWork } from '../infrastructure/base/unit.of.work';
import { RegisterVeterinarianRequest, RegisterVeterinarianService, } from '../aplication/veterinarian/register.veterinarian.service';

@Controller('Veterinarian')
export class VeterinarianController{

  constructor(private readonly unitOfWork: UnitOfWork) {
  }
  @Post()
  async registerVeterinarian(@Body() request: RegisterVeterinarianRequest){
    const service: RegisterVeterinarianService = new RegisterVeterinarianService(this.unitOfWork);
    return await service.execute(request);
  }
}
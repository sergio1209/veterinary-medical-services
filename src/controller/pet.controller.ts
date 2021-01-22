import { Body, Controller, Post } from '@nestjs/common';
import { UnitOfWork } from '../infrastructure/base/unit.of.work';
import { RegisterPetRequest, RegisterPetService } from '../aplication/pet/register.pet.service';


@Controller('Pet')
export class PetController{

  constructor(private readonly unitOfWork: UnitOfWork) {
  }
  @Post()
  async registerPet(@Body() request: RegisterPetRequest){
    const service: RegisterPetService = new RegisterPetService(this.unitOfWork);
    return await service.execute(request);
  }
}
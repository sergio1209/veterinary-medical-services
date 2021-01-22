import { Body, Controller, Post } from '@nestjs/common';
import { UnitOfWork } from '../infrastructure/base/unit.of.work';
import { RegisterClientRequest, RegisterClientService } from '../aplication/client/register.client.service';

@Controller('Client')
export class ClientController{

  constructor(private readonly unitOfWork: UnitOfWork) {
  }
  @Post()
  async registerClient(@Body() request: RegisterClientRequest){
    const service: RegisterClientService = new RegisterClientService(this.unitOfWork);
    return await service.execute(request);
  }
}

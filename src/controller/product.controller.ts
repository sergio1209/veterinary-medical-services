import { Body, Controller, Post } from '@nestjs/common';
import { UnitOfWork } from '../infrastructure/base/unit.of.work';
import { RegisterProductRequest, RegisterProductService } from '../aplication/product/register.product.service';


@Controller('Product')
export class ProductController{

  constructor(private readonly unitOfWork: UnitOfWork) {
  }
  @Post()
  async registerProduct(@Body() request: RegisterProductRequest){
    const service: RegisterProductService = new RegisterProductService(this.unitOfWork);
    return await service.execute(request);
  }
}
import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { GenericRepository } from '../base/generic.repository';
import { ProductOrm } from '../database/orm/product.orm';
import { Product } from '../../domain/entity/product';


@Injectable()
@EntityRepository(ProductOrm)
export class ProductRepository extends GenericRepository<ProductOrm>{

  public MapOrmToEntity(orm: ProductOrm): Product{
    const product: Product = new Product();
    product._Id= orm._Id;
   product.brand= orm.brand;
   product.code=orm.code;
   product.price= orm.price;
   product.type =orm.type;
    return product;
  }
  public static mapEntityToOrm(entity: Product): ProductOrm{
    const orm: ProductOrm = new ProductOrm();
    orm._Id= entity._Id;
    orm.brand= entity.brand;
    orm.code=entity.code;
    orm.price= entity.price;
    orm.type =entity.type;
    return orm;
  }
}
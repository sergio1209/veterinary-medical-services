import { Connection } from 'typeorm';
import { ClientOrm } from '../orm/client.orm';
import { VeterinarianOrm } from '../orm/veterinarian.orm';
import { PetOrm } from '../orm/pet.Orm';
import { ProductOrm } from '../orm/product.orm';

export const ClientProvider =[{

  provide: 'CLIENT_REPOSITORY',
  useFactory:(connection: Connection) => connection.getRepository(ClientOrm),
  inject: ['DATABASE_CONNECTION'],
}];

export const VeterinarianProvider =[{

  provide: 'VETERINARIAN_REPOSITORY',
  useFactory:(connection: Connection) => connection.getRepository(VeterinarianOrm),
  inject: ['DATABASE_CONNECTION'],
}];
export const PetProvider =[{

  provide: 'PET_REPOSITORY',
  useFactory:(connection: Connection) => connection.getRepository(PetOrm),
  inject: ['DATABASE_CONNECTION'],
}];
export const ProductProvider =[{

  provide: 'PRODUCT_REPOSITORY',
  useFactory:(connection: Connection) => connection.getRepository(ProductOrm),
  inject: ['DATABASE_CONNECTION'],
}];
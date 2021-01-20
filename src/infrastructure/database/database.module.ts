import { Module } from '@nestjs/common';
import { databaseProviders} from './provider/database.provider';
import { ClientProvider, PetProvider, ProductProvider, VeterinarianProvider } from './migrations/entities.provider';

@Module({

  providers:  [
    ...databaseProviders,
    ...ClientProvider,
    ...VeterinarianProvider,
    ...PetProvider,
    ...ProductProvider
  ],
  exports:[
    ...databaseProviders,
    ...ClientProvider,
    ...VeterinarianProvider,
    ...PetProvider,
    ...ProductProvider

  ]


})
export class DatabaseModule{}
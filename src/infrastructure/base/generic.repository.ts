import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Person } from '../../domain/entity/person';
import { Pet } from '../../domain/entity/pet';
import { Product } from '../../domain/entity/product';

@Injectable()
export abstract class GenericRepository<T> extends MongoRepository<T>{

  public abstract MapOrmToEntity(orm: T): any;

// PERSONS
  public async findEntity(number: string): Promise<any>{
    const orm = await this.findOne({where:{number: number}});
    return orm == undefined ? undefined: this.MapOrmToEntity(orm);
  }

  public async findAllEntities(): Promise<any[]>{
    const entityList = [];
    const searchedEntities = await this.find();
    searchedEntities.forEach(orm => entityList.push(this.MapOrmToEntity(orm)));
    return entityList;
  }

}
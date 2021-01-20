import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { GenericRepository } from '../base/generic.repository';
import { PetOrm } from '../database/orm/pet.Orm';
import { Pet } from '../../domain/entity/pet';

@Injectable()
@EntityRepository(PetOrm)
export class PetRepository extends GenericRepository<PetOrm>{

  public MapOrmToEntity(orm: PetOrm): Pet{
    const pet: Pet = new Pet();
    pet._Id= orm._Id;
    pet.ownerId= orm.ownerId;
    pet.age= orm.age;
    pet.gender=orm.gender;
    pet.kind=orm.kind;
    pet.race=orm.race;
    pet.weigth=orm.weigth;
    return pet;
  }
  public static mapEntityToOrm(entity: Pet): PetOrm{
    const orm: PetOrm = new PetOrm();
    orm._Id=entity._Id;
    orm.ownerId= entity.ownerId;
    orm.age= entity.age;
    orm.gender=entity.gender;
    orm.kind=entity.kind;
    orm.race=entity.race;
    orm.weigth=entity.weigth;
    return orm;
  }
}
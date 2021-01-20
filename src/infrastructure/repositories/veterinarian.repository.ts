import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { GenericRepository } from '../base/generic.repository';
import { Person } from '../../domain/entity/person';
import { VeterinarianOrm } from '../database/orm/veterinarian.orm';
import { Veterinary } from '../../domain/entity/veterinary';

@Injectable()
@EntityRepository(VeterinarianOrm)
export class VeterinarianRepository extends GenericRepository<VeterinarianOrm>{

  public MapOrmToEntity(orm: VeterinarianOrm): Person{
    const veterinarian: Veterinary = new Veterinary();
    veterinarian._Id= orm._Id;
    veterinarian.id= orm.id;
    veterinarian.name = orm.name;
    veterinarian.numberTelephone = orm.numberTelephone;
    veterinarian.address = orm.address;
    veterinarian.speciality= orm.speciality;
    veterinarian.turn = orm.turn;
    return veterinarian;
  }
  public static mapEntityToOrm(entity: Veterinary): VeterinarianOrm{
    const orm: VeterinarianOrm = new VeterinarianOrm();
    orm._Id= entity._Id;
    orm.id= entity.id;
    orm.name = entity.name;
    orm.numberTelephone = entity.numberTelephone;
    orm.address = entity.address;
    orm.speciality= entity.speciality;
    orm.turn = entity.turn;
    return orm;
  }
}
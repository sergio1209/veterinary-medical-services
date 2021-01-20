import { ClientOrm } from '../database/orm/client.orm';
import { GenericRepository } from '../base/generic.repository';
import { EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Person } from '../../domain/entity/person';
import { Client } from '../../domain/entity/client';

@Injectable()
@EntityRepository(ClientOrm)
export class ClientRepository extends GenericRepository<ClientOrm>{

  public MapOrmToEntity(orm: ClientOrm): Person{
    const client: Person = new Client();
    client._Id= orm._Id;
    client.id= orm.id;
    client.name = orm.name;
    client.numberTelephone = orm.numberTelephone;
    client.address = orm.address;
    return client;
  }
  public static mapEntityToOrm(entity: Person): ClientOrm{
    const orm: ClientOrm = new ClientOrm();
    orm._Id= entity._Id;
    orm.id= entity.id;
    orm.name = entity.name;
    orm.numberTelephone = entity.numberTelephone;
    orm.address = entity.address;
    return orm;
  }
}
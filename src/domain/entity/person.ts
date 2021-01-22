import { ObjectID } from 'typeorm';

export abstract class Person{
 public  _Id: ObjectID;
  public name: string;
  public id: string;
  public numberTelephone: string;
  public address: string;
}
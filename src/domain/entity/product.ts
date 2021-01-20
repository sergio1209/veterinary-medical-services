import { ObjectID } from 'typeorm';

export class Product{
  public  _Id: ObjectID;
  public code: string;
  public type: string;
  public brand: string; //marca
  public price: number;

}
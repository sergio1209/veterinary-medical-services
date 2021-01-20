import { IVeterinaryService } from '../contracts/i.veterinary.service';
import { ObjectID } from 'typeorm';


export class Pet {
  public  _Id: ObjectID;
  public ownerId: string;
  public kind: string; //especie
  public race: string; //raza
  public weigth:  string; //peso
  public age: string;
  public gender: string;



}
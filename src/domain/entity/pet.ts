import { IVeterinaryService } from '../contracts/i.veterinary.service';


export class Pet implements IVeterinaryService{
  public ownerId: string;
  public kind: string; //especie
  public race: string; //raza
  public weigth:  string; //peso
  public age: string;
  public gender: string;

  departure() {
  }

  reception() {
  }



}
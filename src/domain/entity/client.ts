import { Person } from './person';
import { IVeterinaryService } from '../contracts/i.veterinary.service';
import { Pet } from './pet';

export  class Client extends Person implements IVeterinaryService{

 
  daycares(client: Client, pet: Pet) {
  }

  haircuts(client: Client, pet: Pet) {
  }

  hospitalizes(client: Client, pet: Pet) {
  }

  scheduleAppointments(client: Client, pet: Pet) {
  }


}
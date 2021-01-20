import { ClientRepository } from '../repositories/client.repository';
import { VeterinarianRepository } from '../repositories/veterinarian.repository';
import { PetRepository } from '../repositories/pet.repository';
import { ProductRepository } from '../repositories/product.repository';
import { Connection } from 'typeorm';

export interface IUnitOfWork{
  clientRepository: ClientRepository;
  veterinarianRepository: VeterinarianRepository;
  petRepository: PetRepository;
  productRepository: ProductRepository;
  start(): void;
  complete(work: () => any): Promise<any>;
  getConnection(): Connection;
  closeConnection();
}
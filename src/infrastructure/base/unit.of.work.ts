import { IUnitOfWork } from '../contracts/i.unit.of.work';
import { Connection, EntityManager, QueryRunner } from 'typeorm';
import { ClientRepository } from '../repositories/client.repository';
import { VeterinarianRepository } from '../repositories/veterinarian.repository';
import { PetRepository } from '../repositories/pet.repository';
import { ProductRepository } from '../repositories/product.repository';
import { Inject } from '@nestjs/common';

export class UnitOfWork implements IUnitOfWork{

  private readonly queryRunner: QueryRunner;
  private entityManager: EntityManager;
  clientRepository: ClientRepository;
  veterinarianRepository: VeterinarianRepository;
  petRepository: PetRepository;
  productRepository: ProductRepository;
  constructor(@Inject('DATABASE_CONNECTION') private readonly  asyncDatabaseConnection: Connection) {
    this.queryRunner = this.asyncDatabaseConnection.createQueryRunner();

    this.clientRepository = this.asyncDatabaseConnection.getCustomRepository(ClientRepository);
    this.veterinarianRepository = this.asyncDatabaseConnection.getCustomRepository(VeterinarianRepository);
    this.petRepository = this.asyncDatabaseConnection.getCustomRepository(PetRepository);
    this.productRepository = this.asyncDatabaseConnection.getCustomRepository(ProductRepository);
  }
  async start() {
    await this.queryRunner.startTransaction();
    this.setEntityManager();
  }
  private setEntityManager(){
    this.entityManager = this.queryRunner.manager;
  }


  async complete(work: () => any): Promise<any> {
    try{
      const response = await work();
      await this.queryRunner.commitTransaction();
      return response;
    }catch (e){
      await this.queryRunner.rollbackTransaction();
      return e.toString();
    }finally {
      await this.queryRunner.release();
    }
  }

  getConnection(): Connection {
    return this.asyncDatabaseConnection;
  }

  async  closeConnection() {
    await this.asyncDatabaseConnection.close();
    await this.queryRunner.manager.connection.close();
  }
}
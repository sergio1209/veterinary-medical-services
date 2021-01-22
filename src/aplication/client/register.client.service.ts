import { IUnitOfWork } from '../../infrastructure/contracts/i.unit.of.work';
import { Person } from '../../domain/entity/person';
import { Client } from '../../domain/entity/client';
import { ClientRepository } from '../../infrastructure/repositories/client.repository';

export class RegisterClientService{

  constructor(private readonly unitOfWork: IUnitOfWork) {}
  async execute(request: RegisterClientRequest): Promise<RegisterClientResponse>{
    try{
      const clientSearched: Person = await this.unitOfWork.clientRepository.findEntity(request.id);

      if (clientSearched== undefined){
        const newClient :  Person = new Client();
        newClient.name= request.name;
        newClient.id =request.id;
        newClient.numberTelephone =request.numberTelephone;
        newClient.address=request.address;
        await this.unitOfWork.start();
        const  savedClient = await this.unitOfWork.clientRepository.save(ClientRepository.mapEntityToOrm(newClient));
        if (savedClient != undefined){
          return new RegisterClientResponse('Nuevo cliente registrado exitosamente')
        }
      }
      return new RegisterClientResponse('este cliente ya se encuentra registrado');

    }catch(e){
      return new RegisterClientResponse('se ha presentado un error al momento de registrar el cliente');
     }
  }
}


export class RegisterClientRequest{
  constructor (
    public readonly name: string,
    public readonly id: string,
    public readonly numberTelephone: string,
    public readonly address: string
  ){}
}
export class RegisterClientResponse{
  constructor(public readonly message: string) {
  }
}
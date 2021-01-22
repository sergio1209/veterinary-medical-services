import { IUnitOfWork } from '../../infrastructure/contracts/i.unit.of.work';
import { Person } from '../../domain/entity/person';
import { VeterinarianRepository } from '../../infrastructure/repositories/veterinarian.repository';
import { Veterinary } from '../../domain/entity/veterinary';


export class RegisterVeterinarianService {

  constructor(private readonly unitOfWork: IUnitOfWork) {}
  async execute(request: RegisterVeterinarianRequest): Promise<RegisterVeterinarianResponse>{
    try{
      const veterinarianSearched: Person = await this.unitOfWork.veterinarianRepository.findEntity(request.id);

      if (veterinarianSearched== undefined){
        const newVeterinarian :  Veterinary = new Veterinary();
        newVeterinarian.name= request.name;
        newVeterinarian.id =request.id;
        newVeterinarian.numberTelephone =request.numberTelephone;
        newVeterinarian.address=request.address;
        newVeterinarian.speciality= request.speciality;
        newVeterinarian.turn=request.turn;

        await this.unitOfWork.start();
        const  savedVeterinarian = await this.unitOfWork.veterinarianRepository.save(VeterinarianRepository.mapEntityToOrm(newVeterinarian));
        if (savedVeterinarian != undefined){
          return new RegisterVeterinarianResponse('Nuevo veterinario registrado exitosamente')
        }
      }
      return new RegisterVeterinarianResponse('este veterinario ya se encuentra registrado');

    }catch(e){
      return new RegisterVeterinarianResponse('se ha presentado un error al momento de registrar el veterinario');
    }
  }
}


export class RegisterVeterinarianRequest {
  constructor (
    public readonly name: string,
    public readonly id: string,
    public readonly numberTelephone: string,
    public readonly address: string,
    public readonly speciality:string,
    public readonly turn:string
  ){}
}
export class RegisterVeterinarianResponse {
  constructor(public readonly message: string) {
  }
}
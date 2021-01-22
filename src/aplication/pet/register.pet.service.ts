import { IUnitOfWork } from '../../infrastructure/contracts/i.unit.of.work';
import { Pet } from '../../domain/entity/pet';
import { PetRepository } from '../../infrastructure/repositories/pet.repository';

export class RegisterPetService {

  constructor(private readonly unitOfWork: IUnitOfWork) {}
  async execute(request: RegisterPetRequest): Promise<RegisterPetResponse>{
    try{
      const petSearched: Pet = await this.unitOfWork.petRepository.findEntity(request.ownerId);

      if (petSearched== undefined){
        const newPet :  Pet = new Pet();
        newPet.ownerId= request.ownerId;
        newPet.weigth= request.weigth;
        newPet.race= request.race;
        newPet.kind= request.kind;
        newPet.gender= request.gender;
        newPet.age=request.age;
        await this.unitOfWork.start();
        const  savedPet = await this.unitOfWork.petRepository.save(PetRepository.mapEntityToOrm(newPet));
        if (savedPet != undefined){
          return new RegisterPetResponse('Nueva mascota registrada exitosamente')
        }
      }
      return new RegisterPetResponse('esta mascota ya se encuentra registrada');

    }catch(e){
      return new RegisterPetResponse('se ha presentado un error al momento de registrar la mascota');
    }
  }
}


export class RegisterPetRequest {
  constructor (
    public readonly ownerId: string,
  public readonly kind: string, //especie
  public readonly race: string, //raza
  public readonly weigth:  string, //peso
  public readonly age: string,
  public readonly gender: string
  ){}
}
export class RegisterPetResponse {
  constructor(public readonly message: string) {
  }
}
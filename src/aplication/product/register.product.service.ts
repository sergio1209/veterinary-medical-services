import { IUnitOfWork } from '../../infrastructure/contracts/i.unit.of.work';
import { Product } from '../../domain/entity/product';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';


export class RegisterProductService {

  constructor(private readonly unitOfWork: IUnitOfWork) {}
  async execute(request: RegisterProductRequest): Promise<RegisterProductResponse>{
    try{
      const productSearched: Product = await this.unitOfWork.productRepository.findEntity(request.code);

      if (productSearched== undefined){
        const newProduct :  Product = new Product();
        newProduct.code=request.code;
        newProduct.type=request.type;
        newProduct.price=request.price;
        newProduct.brand=request.brand;
        await this.unitOfWork.start();
        const  savedProduct = await this.unitOfWork.productRepository.save(ProductRepository.mapEntityToOrm(newProduct));
        if (savedProduct != undefined){
          return new RegisterProductResponse('Nuevo producto registrado exitosamente')
        }
      }
      return new RegisterProductResponse('este producto ya se encuentra registrado');

    }catch(e){
      return new RegisterProductResponse('se ha presentado un error al momento de registrar el producto');
    }
  }
}


export class RegisterProductRequest {
  constructor (
    public readonly code: string,
  public readonly type: string,
  public readonly brand: string, //marca
  public readonly price: number
  ){}
}
export class RegisterProductResponse {
  constructor(public readonly message: string) {
  }
}
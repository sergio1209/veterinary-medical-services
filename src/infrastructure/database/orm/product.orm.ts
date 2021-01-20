import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('PRODUCTS')
export class ProductOrm{
  @ObjectIdColumn()
  _Id: ObjectID;
  @Column()
  public code: string;
  @Column()
  public type: string;
  @Column()
  public brand: string;
  @Column()
  public price: number;

}
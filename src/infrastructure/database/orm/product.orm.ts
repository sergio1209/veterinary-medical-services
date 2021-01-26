import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('PRODUCTS')
export class ProductOrm{
  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public code: string;
  @Column()
  public type: string;
  @Column()
  public brand: string;
  @Column()
  public price: number;

}
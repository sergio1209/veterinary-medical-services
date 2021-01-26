import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('PETS')
export class PetOrm{

  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public ownerId: string;
  @Column()
  public kind: string;
  @Column()
  public race: string;
  @Column()
  public weigth: string;
  @Column()
  public age: string;
  @Column()
  public gender: string;


}
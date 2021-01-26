import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('VETERINARIANS')
export class VeterinarianOrm{
  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public id: string;
  @Column()
  public name: string;
  @Column()
  public numberTelephone: string;
  @Column()
  public address: string;
  @Column()
  public speciality: string;
  @Column()
  public turn: string;

}
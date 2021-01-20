import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('VETERINARIANS')
export class VeterinarianOrm{
  @ObjectIdColumn()
  _Id: ObjectID;
  @Column()
  public id: number;
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
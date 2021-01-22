import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('CLIENTS')
export class ClientOrm{
  @ObjectIdColumn()
  _Id: ObjectID;
  @Column()
  public id: string;
  @Column()
  public name: string;
  @Column()
  public numberTelephone: string;
  @Column()
  public address: string;

}
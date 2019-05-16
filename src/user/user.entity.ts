import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public username: string;

  @Column({
    type: 'bytea',
    name: 'key',
  })
  public key: Buffer;

  @Column({
    type: 'bytea',
    name: 'salt',
  })
  public salt: Buffer;
}

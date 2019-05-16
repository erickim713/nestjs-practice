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
    name: 'encrypted_password',
  })
  public encryptedPassword: Buffer;

  @Column({
    type: 'bytea',
    name: 'salt_value',
  })
  public saltValue: Buffer;
}

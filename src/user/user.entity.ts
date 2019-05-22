import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Todo } from 'src/todo/todo.entity';

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

  @OneToMany(type => Todo, todo => todo.user)
  public todos: Todo[]
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from '../user/user.entity';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public taskName: string;

  @ManyToOne(type => User, user => user.todos)
  public user: User;

  @Column({
    default: false
  })
  public done: boolean;
}

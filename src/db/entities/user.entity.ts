import { Entity, Column, OneToMany } from 'typeorm';

import { Base } from '../base.entity';
import { Account } from './account.entity';

@Entity({ name: 'users' })
export class User extends Base {
  @Column({
    type: String,
    unique: true,
  })
  email: string;

  @Column({ type: String })
  password: string;

  @OneToMany(() => Account, (Account) => Account.user)
  accounts: Account[];
}

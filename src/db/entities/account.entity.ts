import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { Base } from '../base.entity';
import { Transaction } from './transaction.entity';
import { User } from './user.entity';

export enum Currency {
  USD = 'USD',
  BYN = 'BYN',
  RUB = 'RUB',
  EUR = 'EUR',
}

@Entity({ name: 'accounts' })
export class Account extends Base {
  @Column({ type: String })
  name: string;

  @Column({ type: 'enum', enum: Currency, default: Currency.BYN })
  currency: Currency;

  @Column({ type: Number })
  value: number;

  @ManyToOne(() => User, (user) => user.accounts)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];
}

import { Entity, Column, ManyToOne } from 'typeorm';

import { Base } from '../base.entity';
import { Account } from './account.entity';

export enum TransactionType {
  INC = 'Increment',
  DEC = 'Decrement',
}

@Entity({ name: 'transactions' })
export class Transaction extends Base {
  @Column({ type: String })
  name: string;

  @Column({ type: 'enum', enum: TransactionType })
  type: TransactionType;

  @Column({ type: String })
  category: string;

  @Column({ type: Number })
  change_value: number;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
}

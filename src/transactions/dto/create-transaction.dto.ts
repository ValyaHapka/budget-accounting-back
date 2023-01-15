import { TransactionType } from 'src/db/entities/transaction.entity';
import { Length, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateTransactionDto {
  @Length(1, 30)
  readonly name: string;
  @IsNotEmpty()
  readonly transaction_type: TransactionType;
  @Length(2, 10)
  readonly category: string;
  @IsInt()
  readonly change_value: number;
  @IsNotEmpty()
  readonly account_id: number;
}

import { Currency } from 'src/db/entities/account.entity';
import { Length, IsNotEmpty, IsInt } from 'class-validator';

export class createAccountDto {
  @Length(1, 30)
  readonly name: string;
  @IsNotEmpty()
  readonly currency: Currency;
  @IsInt()
  readonly value: number;
  @IsNotEmpty()
  readonly userId: number;
}

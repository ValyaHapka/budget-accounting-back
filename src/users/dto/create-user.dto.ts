import { IsEmail, Length } from 'class-validator';

export class createUserDto {
  @IsEmail()
  readonly email: string;

  @Length(6, 15)
  readonly password: string;
}

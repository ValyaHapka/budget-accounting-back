import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from 'src/db/entities/account.entity';
import { createAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account) private AccountRepository: Repository<Account>,
  ) {}

  async createAccount(dto: createAccountDto): Promise<Account> {
    const account = await this.AccountRepository.create(dto);
    await this.AccountRepository.save(account);

    return account;
  }

  async getAccountsByUserId(id: number): Promise<Account[]> {
    const accounts = this.AccountRepository.findBy({ user: { id: id } });

    return accounts;
  }
}

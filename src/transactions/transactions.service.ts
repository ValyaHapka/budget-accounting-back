import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/db/entities/transaction.entity';
import { Repository } from 'typeorm';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private TransactionRepository: Repository<Transaction>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const transaction = await this.TransactionRepository.create(
      createTransactionDto,
    );
    await this.TransactionRepository.save(transaction);

    return transaction;
  }

  async getTransactionsByAccountId(id: number): Promise<Transaction[]> {
    const transactions = await this.TransactionRepository.findBy({
      account: { id: id },
    });

    return transactions;
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}

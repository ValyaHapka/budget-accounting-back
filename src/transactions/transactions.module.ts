import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Transaction } from 'src/db/entities/transaction.entity';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [TypeOrmModule.forFeature([Transaction])],
})
export class TransactionsModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './db/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Transaction } from './db/entities/transaction.entity';
import { Account } from './db/entities/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Transaction, Account],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AccountsModule,
    TransactionsModule,
    AuthModule,
  ],
})
export class AppModule {}

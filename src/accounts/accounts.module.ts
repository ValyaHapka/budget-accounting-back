import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from 'src/db/entities/account.entity';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
  imports: [TypeOrmModule.forFeature([Account])],
  exports: [TypeOrmModule],
})
export class AccountsModule {}

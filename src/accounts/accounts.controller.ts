import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { AccountsService } from './accounts.service';
import { createAccountDto } from './dto/create-account.dto';

@Controller('budgets')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  create(@Body() accountDto: createAccountDto) {
    return this.accountsService.createAccount(accountDto);
  }

  @Get(':id')
  getAccounts(@Param('id') id: string) {
    return this.accountsService.getAccountsByUserId(+id);
  }
}

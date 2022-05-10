import { AccountCreateSchema } from '@magiclick/utils/validators/account.validator'
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { YupValidationPipe } from '../../pipes/yup-validation.pipe'
import { AccountCreateInput } from './account.dto'
import { AccountEntity } from './account.model'
import { AccountService } from './account.service'
@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @UsePipes(new YupValidationPipe(AccountCreateSchema))
  @ApiCreatedResponse({ type: AccountEntity })
  async create(@Body() data: AccountCreateInput): Promise<AccountEntity> {
    return this.accountService.create(data)
  }

  @Get()
  @ApiOkResponse({ type: AccountEntity, isArray: true })
  async list(
    @Query() where: Prisma.AccountWhereInput,
  ): Promise<AccountEntity[]> {
    return this.accountService.list(where)
  }

  @Get(':id')
  @ApiOkResponse({ type: AccountEntity })
  async detail(@Param() params: { id: number }): Promise<AccountEntity> {
    return this.accountService.detail(Number(params.id))
  }
}

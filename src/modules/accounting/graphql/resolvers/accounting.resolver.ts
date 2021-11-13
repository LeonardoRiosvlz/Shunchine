import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateAccountingInput } from '../dto/inputs/create-accounting.input';
import { AccountingResponse } from '../dto/responses/accounting.response';
import { GetAllAccountingInput } from '../dto/inputs/get-all-accounting.input';
import { DeleteAccountingInput } from '../dto/inputs/delete-accounting.input';
import { CreateAccountingCommand } from '../../cqrs/commands/impl/create-accounting.command';
import { DeleteAccountingCommand } from '../../cqrs/commands/impl/delete-accounting.command';
import { GetAllAccountingQuery } from '../../cqrs/queries/impl/get-all-accounting.query';
import { AccountingMapper } from '../../mapper/accounting.mapper';
import { UpdateAccountingInput } from '../dto/inputs/update-accounting.input';
import { UpdateAccountingCommand } from '../../cqrs/commands/impl/update-accounting.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedAccountingInput } from '../dto/inputs/get-paginated-accounting.input';
import { PaginatedAccountingResponse } from '../dto/responses/paginated-accounting.response';
import { GetPaginatedAccountingQuery } from '../../cqrs/queries/impl/get-paginated-accounting.query';
import { GetOneAccountingInput } from '../dto/inputs/get-one-accounting.input';
import { GetOneAccountingQuery } from '../../cqrs/queries/impl/get-one-accounting.query';
import { DeleteManyAccountingInput } from '../dto/inputs/delete-many-accounting.input';
import { DeleteManyAccountingCommand } from '../../cqrs/commands/impl/delete-many-accounting.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { AccountingEntity } from '../../entities/accounting.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => AccountingResponse)
export class AccountingResolver extends BaseResolver {
  constructor(
    private readonly _accountingMapper: AccountingMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createAccounting(
    @Args('input') input: CreateAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateAccountingCommand(
      this._accountingMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateAccounting(
    @Args('input') { update, entityId }: UpdateAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateAccountingCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteAccounting(
    @Args('input') { entityId }: DeleteAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteAccountingCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyAccounting(
    @Args('input') input: DeleteManyAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyAccountingCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[AccountingResponse])
  async getAllAccounting(
    @Args('input', { nullable: true }) input: GetAllAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<AccountingResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<AccountingEntity>>>(new GetAllAccountingQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._accountingMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.GET_ONE})
  @Query(() => AccountingResponse, { nullable: true })
  async getOneAccounting(
    @Args('input', { nullable: true }) input: GetOneAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<AccountingResponse> {
    const resp = await this._cqrsBus.execQuery<Result<AccountingEntity>>(new GetOneAccountingQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._accountingMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ACCOUNTING'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedAccountingResponse, { nullable: true })
  async getPaginatedAccounting(
    @Args('input', { nullable: true }) input: GetPaginatedAccountingInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedAccountingResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<AccountingEntity>>>(new GetPaginatedAccountingQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._accountingMapper.persistent2Dto),
    };
  }


}

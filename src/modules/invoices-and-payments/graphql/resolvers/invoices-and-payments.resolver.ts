import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateInvoicesAndPaymentsInput } from '../dto/inputs/create-invoices-and-payments.input';
import { InvoicesAndPaymentsResponse } from '../dto/responses/invoices-and-payments.response';
import { GetAllInvoicesAndPaymentsInput } from '../dto/inputs/get-all-invoices-and-payments.input';
import { DeleteInvoicesAndPaymentsInput } from '../dto/inputs/delete-invoices-and-payments.input';
import { CreateInvoicesAndPaymentsCommand } from '../../cqrs/commands/impl/create-invoices-and-payments.command';
import { DeleteInvoicesAndPaymentsCommand } from '../../cqrs/commands/impl/delete-invoices-and-payments.command';
import { GetAllInvoicesAndPaymentsQuery } from '../../cqrs/queries/impl/get-all-invoices-and-payments.query';
import { InvoicesAndPaymentsMapper } from '../../mapper/invoices-and-payments.mapper';
import { UpdateInvoicesAndPaymentsInput } from '../dto/inputs/update-invoices-and-payments.input';
import { UpdateInvoicesAndPaymentsCommand } from '../../cqrs/commands/impl/update-invoices-and-payments.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedInvoicesAndPaymentsInput } from '../dto/inputs/get-paginated-invoices-and-payments.input';
import { PaginatedInvoicesAndPaymentsResponse } from '../dto/responses/paginated-invoices-and-payments.response';
import { GetPaginatedInvoicesAndPaymentsQuery } from '../../cqrs/queries/impl/get-paginated-invoices-and-payments.query';
import { GetOneInvoicesAndPaymentsInput } from '../dto/inputs/get-one-invoices-and-payments.input';
import { GetOneInvoicesAndPaymentsQuery } from '../../cqrs/queries/impl/get-one-invoices-and-payments.query';
import { DeleteManyInvoicesAndPaymentsInput } from '../dto/inputs/delete-many-invoices-and-payments.input';
import { DeleteManyInvoicesAndPaymentsCommand } from '../../cqrs/commands/impl/delete-many-invoices-and-payments.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { InvoicesAndPaymentsEntity } from '../../entities/invoices-and-payments.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => InvoicesAndPaymentsResponse)
export class InvoicesAndPaymentsResolver extends BaseResolver {
  constructor(
    private readonly _invoicesAndPaymentsMapper: InvoicesAndPaymentsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createInvoicesAndPayments(
    @Args('input') input: CreateInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateInvoicesAndPaymentsCommand(
      this._invoicesAndPaymentsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateInvoicesAndPayments(
    @Args('input') { update, entityId }: UpdateInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateInvoicesAndPaymentsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteInvoicesAndPayments(
    @Args('input') { entityId }: DeleteInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteInvoicesAndPaymentsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyInvoicesAndPayments(
    @Args('input') input: DeleteManyInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyInvoicesAndPaymentsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[InvoicesAndPaymentsResponse])
  async getAllInvoicesAndPayments(
    @Args('input', { nullable: true }) input: GetAllInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<InvoicesAndPaymentsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<InvoicesAndPaymentsEntity>>>(new GetAllInvoicesAndPaymentsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._invoicesAndPaymentsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.GET_ONE})
  @Query(() => InvoicesAndPaymentsResponse, { nullable: true })
  async getOneInvoicesAndPayments(
    @Args('input', { nullable: true }) input: GetOneInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<InvoicesAndPaymentsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<InvoicesAndPaymentsEntity>>(new GetOneInvoicesAndPaymentsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._invoicesAndPaymentsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['INVOICES_AND_PAYMENTS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedInvoicesAndPaymentsResponse, { nullable: true })
  async getPaginatedInvoicesAndPayments(
    @Args('input', { nullable: true }) input: GetPaginatedInvoicesAndPaymentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedInvoicesAndPaymentsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<InvoicesAndPaymentsEntity>>>(new GetPaginatedInvoicesAndPaymentsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._invoicesAndPaymentsMapper.persistent2Dto),
    };
  }


}

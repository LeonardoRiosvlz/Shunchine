import { Args, Mutation, Query, Resolver, Parent,ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateYardRentalInput } from '../dto/inputs/create-yard-rental.input';
import { YardRentalResponse } from '../dto/responses/yard-rental.response';
import { GetAllYardRentalInput } from '../dto/inputs/get-all-yard-rental.input';
import { DeleteYardRentalInput } from '../dto/inputs/delete-yard-rental.input';
import { CreateYardRentalCommand } from '../../cqrs/commands/impl/create-yard-rental.command';
import { DeleteYardRentalCommand } from '../../cqrs/commands/impl/delete-yard-rental.command';
import { GetAllYardRentalQuery } from '../../cqrs/queries/impl/get-all-yard-rental.query';
import { YardRentalMapper } from '../../mapper/yard-rental.mapper';
import { UpdateYardRentalInput } from '../dto/inputs/update-yard-rental.input';
import { UpdateYardRentalCommand } from '../../cqrs/commands/impl/update-yard-rental.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedYardRentalInput } from '../dto/inputs/get-paginated-yard-rental.input';
import { PaginatedYardRentalResponse } from '../dto/responses/paginated-yard-rental.response';
import { GetPaginatedYardRentalQuery } from '../../cqrs/queries/impl/get-paginated-yard-rental.query';
import { GetOneYardRentalInput } from '../dto/inputs/get-one-yard-rental.input';
import { GetOneYardRentalQuery } from '../../cqrs/queries/impl/get-one-yard-rental.query';
import { DeleteManyYardRentalInput } from '../dto/inputs/delete-many-yard-rental.input';
import { DeleteManyYardRentalCommand } from '../../cqrs/commands/impl/delete-many-yard-rental.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { YardRentalEntity } from '../../entities/yard-rental.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';




@Resolver(() => YardRentalResponse)
export class YardRentalResolver extends BaseResolver {
  constructor(
    private readonly _yardRentalMapper: YardRentalMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createYardRental(
    @Args('input') input: CreateYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateYardRentalCommand(
      this._yardRentalMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateYardRental(
    @Args('input') { update, entityId }: UpdateYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateYardRentalCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteYardRental(
    @Args('input') { entityId }: DeleteYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteYardRentalCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyYardRental(
    @Args('input') input: DeleteManyYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyYardRentalCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[YardRentalResponse])
  async getAllYardRental(
    @Args('input', { nullable: true }) input: GetAllYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<YardRentalResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<YardRentalEntity>>>(new GetAllYardRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._yardRentalMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.GET_ONE})
  @Query(() => YardRentalResponse, { nullable: true })
  async getOneYardRental(
    @Args('input', { nullable: true }) input: GetOneYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<YardRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<YardRentalEntity>>(new GetOneYardRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._yardRentalMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['YARD_RENTAL'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedYardRentalResponse, { nullable: true })
  async getPaginatedYardRental(
    @Args('input', { nullable: true }) input: GetPaginatedYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedYardRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<YardRentalEntity>>>(new GetPaginatedYardRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._yardRentalMapper.persistent2Dto),
    };
  }


  

}

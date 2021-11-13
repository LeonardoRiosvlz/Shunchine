import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFinancedEquipmentInput } from '../dto/inputs/create-financed-equipment.input';
import { FinancedEquipmentResponse } from '../dto/responses/financed-equipment.response';
import { GetAllFinancedEquipmentInput } from '../dto/inputs/get-all-financed-equipment.input';
import { DeleteFinancedEquipmentInput } from '../dto/inputs/delete-financed-equipment.input';
import { CreateFinancedEquipmentCommand } from '../../cqrs/commands/impl/create-financed-equipment.command';
import { DeleteFinancedEquipmentCommand } from '../../cqrs/commands/impl/delete-financed-equipment.command';
import { GetAllFinancedEquipmentQuery } from '../../cqrs/queries/impl/get-all-financed-equipment.query';
import { FinancedEquipmentMapper } from '../../mapper/financed-equipment.mapper';
import { UpdateFinancedEquipmentInput } from '../dto/inputs/update-financed-equipment.input';
import { UpdateFinancedEquipmentCommand } from '../../cqrs/commands/impl/update-financed-equipment.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFinancedEquipmentInput } from '../dto/inputs/get-paginated-financed-equipment.input';
import { PaginatedFinancedEquipmentResponse } from '../dto/responses/paginated-financed-equipment.response';
import { GetPaginatedFinancedEquipmentQuery } from '../../cqrs/queries/impl/get-paginated-financed-equipment.query';
import { GetOneFinancedEquipmentInput } from '../dto/inputs/get-one-financed-equipment.input';
import { GetOneFinancedEquipmentQuery } from '../../cqrs/queries/impl/get-one-financed-equipment.query';
import { DeleteManyFinancedEquipmentInput } from '../dto/inputs/delete-many-financed-equipment.input';
import { DeleteManyFinancedEquipmentCommand } from '../../cqrs/commands/impl/delete-many-financed-equipment.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FinancedEquipmentEntity } from '../../entities/financed-equipment.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => FinancedEquipmentResponse)
export class FinancedEquipmentResolver extends BaseResolver {
  constructor(
    private readonly _financedEquipmentMapper: FinancedEquipmentMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFinancedEquipment(
    @Args('input') input: CreateFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFinancedEquipmentCommand(
      this._financedEquipmentMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFinancedEquipment(
    @Args('input') { update, entityId }: UpdateFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFinancedEquipmentCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFinancedEquipment(
    @Args('input') { entityId }: DeleteFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFinancedEquipmentCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFinancedEquipment(
    @Args('input') input: DeleteManyFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFinancedEquipmentCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FinancedEquipmentResponse])
  async getAllFinancedEquipment(
    @Args('input', { nullable: true }) input: GetAllFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FinancedEquipmentResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FinancedEquipmentEntity>>>(new GetAllFinancedEquipmentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._financedEquipmentMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => FinancedEquipmentResponse, { nullable: true })
  async getOneFinancedEquipment(
    @Args('input', { nullable: true }) input: GetOneFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FinancedEquipmentResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FinancedEquipmentEntity>>(new GetOneFinancedEquipmentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._financedEquipmentMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FINANCED_EQUIPMENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFinancedEquipmentResponse, { nullable: true })
  async getPaginatedFinancedEquipment(
    @Args('input', { nullable: true }) input: GetPaginatedFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFinancedEquipmentResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FinancedEquipmentEntity>>>(new GetPaginatedFinancedEquipmentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._financedEquipmentMapper.persistent2Dto),
    };
  }


}

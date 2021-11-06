import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFfmpgOptionInput } from '../dto/inputs/create-ffmpg-option.input';
import { FfmpgOptionResponse } from '../dto/responses/ffmpg-option.response';
import { GetAllFfmpgOptionInput } from '../dto/inputs/get-all-ffmpg-option.input';
import { DeleteFfmpgOptionInput } from '../dto/inputs/delete-ffmpg-option.input';
import { CreateFfmpgOptionCommand } from '../../cqrs/commands/impl/create-ffmpg-option.command';
import { DeleteFfmpgOptionCommand } from '../../cqrs/commands/impl/delete-ffmpg-option.command';
import { GetAllFfmpgOptionQuery } from '../../cqrs/queries/impl/get-all-ffmpg-option.query';
import { FfmpgOptionMapper } from '../../mapper/ffmpg-option.mapper';
import { UpdateFfmpgOptionInput } from '../dto/inputs/update-ffmpg-option.input';
import { UpdateFfmpgOptionCommand } from '../../cqrs/commands/impl/update-ffmpg-option.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFfmpgOptionInput } from '../dto/inputs/get-paginated-ffmpg-option.input';
import { PaginatedFfmpgOptionResponse } from '../dto/responses/paginated-ffmpg-option.response';
import { GetPaginatedFfmpgOptionQuery } from '../../cqrs/queries/impl/get-paginated-ffmpg-option.query';
import { GetOneFfmpgOptionInput } from '../dto/inputs/get-one-ffmpg-option.input';
import { GetOneFfmpgOptionQuery } from '../../cqrs/queries/impl/get-one-ffmpg-option.query';
import { DeleteManyFfmpgOptionInput } from '../dto/inputs/delete-many-ffmpg-option.input';
import { DeleteManyFfmpgOptionCommand } from '../../cqrs/commands/impl/delete-many-ffmpg-option.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FfmpgOptionEntity } from '../../entities/ffmpg-option.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => FfmpgOptionResponse)
export class FfmpgOptionResolver extends BaseResolver {
  constructor(
    private readonly _ffmpgOptionMapper: FfmpgOptionMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFfmpgOption(
    @Args('input') input: CreateFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFfmpgOptionCommand(
      this._ffmpgOptionMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFfmpgOption(
    @Args('input') { update, entityId }: UpdateFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFfmpgOptionCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFfmpgOption(
    @Args('input') { entityId }: DeleteFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFfmpgOptionCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFfmpgOption(
    @Args('input') input: DeleteManyFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFfmpgOptionCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FfmpgOptionResponse])
  async getAllFfmpgOption(
    @Args('input', { nullable: true }) input: GetAllFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FfmpgOptionResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FfmpgOptionEntity>>>(new GetAllFfmpgOptionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._ffmpgOptionMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.GET_ONE})
  @Query(() => FfmpgOptionResponse, { nullable: true })
  async getOneFfmpgOption(
    @Args('input', { nullable: true }) input: GetOneFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FfmpgOptionResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FfmpgOptionEntity>>(new GetOneFfmpgOptionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._ffmpgOptionMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_OPTION'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFfmpgOptionResponse, { nullable: true })
  async getPaginatedFfmpgOption(
    @Args('input', { nullable: true }) input: GetPaginatedFfmpgOptionInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFfmpgOptionResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FfmpgOptionEntity>>>(new GetPaginatedFfmpgOptionQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._ffmpgOptionMapper.persistent2Dto),
    };
  }


}

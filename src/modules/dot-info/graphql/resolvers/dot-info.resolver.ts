import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDotInfoInput } from '../dto/inputs/create-dot-info.input';
import { DotInfoResponse } from '../dto/responses/dot-info.response';
import { GetAllDotInfoInput } from '../dto/inputs/get-all-dot-info.input';
import { DeleteDotInfoInput } from '../dto/inputs/delete-dot-info.input';
import { CreateDotInfoCommand } from '../../cqrs/commands/impl/create-dot-info.command';
import { DeleteDotInfoCommand } from '../../cqrs/commands/impl/delete-dot-info.command';
import { GetAllDotInfoQuery } from '../../cqrs/queries/impl/get-all-dot-info.query';
import { DotInfoMapper } from '../../mapper/dot-info.mapper';
import { UpdateDotInfoInput } from '../dto/inputs/update-dot-info.input';
import { UpdateDotInfoCommand } from '../../cqrs/commands/impl/update-dot-info.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDotInfoInput } from '../dto/inputs/get-paginated-dot-info.input';
import { PaginatedDotInfoResponse } from '../dto/responses/paginated-dot-info.response';
import { GetPaginatedDotInfoQuery } from '../../cqrs/queries/impl/get-paginated-dot-info.query';
import { GetOneDotInfoInput } from '../dto/inputs/get-one-dot-info.input';
import { GetOneDotInfoQuery } from '../../cqrs/queries/impl/get-one-dot-info.query';
import { DeleteManyDotInfoInput } from '../dto/inputs/delete-many-dot-info.input';
import { DeleteManyDotInfoCommand } from '../../cqrs/commands/impl/delete-many-dot-info.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DotInfoEntity } from '../../entities/dot-info.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response'; 
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => DotInfoResponse)
export class DotInfoResolver extends BaseResolver {
  constructor(
    private readonly _dotInfoMapper: DotInfoMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDotInfo(
    @Args('input') input: CreateDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDotInfoCommand(
      this._dotInfoMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDotInfo(
    @Args('input') { update, entityId }: UpdateDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDotInfoCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDotInfo(
    @Args('input') { entityId }: DeleteDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDotInfoCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDotInfo(
    @Args('input') input: DeleteManyDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDotInfoCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DotInfoResponse])
  async getAllDotInfo(
    @Args('input', { nullable: true }) input: GetAllDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DotInfoResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DotInfoEntity>>>(new GetAllDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._dotInfoMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.GET_ONE})
  @Query(() => DotInfoResponse, { nullable: true })
  async getOneDotInfo(
    @Args('input', { nullable: true }) input: GetOneDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DotInfoResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DotInfoEntity>>(new GetOneDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._dotInfoMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDotInfoResponse, { nullable: true })
  async getPaginatedDotInfo(
    @Args('input', { nullable: true }) input: GetPaginatedDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDotInfoResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DotInfoEntity>>>(new GetPaginatedDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._dotInfoMapper.persistent2Dto),
    };
  }

}

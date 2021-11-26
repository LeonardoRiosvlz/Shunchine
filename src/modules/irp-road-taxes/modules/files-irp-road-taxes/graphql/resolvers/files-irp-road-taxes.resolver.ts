import { Args, Mutation, Query, Resolver,ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesIrpRoadTaxesInput } from '../dto/inputs/create-files-irp-road-taxes.input';
import { FilesIrpRoadTaxesResponse } from '../dto/responses/files-irp-road-taxes.response';
import { GetAllFilesIrpRoadTaxesInput } from '../dto/inputs/get-all-files-irp-road-taxes.input';
import { DeleteFilesIrpRoadTaxesInput } from '../dto/inputs/delete-files-irp-road-taxes.input';
import { CreateFilesIrpRoadTaxesCommand } from '../../cqrs/commands/impl/create-files-irp-road-taxes.command';
import { DeleteFilesIrpRoadTaxesCommand } from '../../cqrs/commands/impl/delete-files-irp-road-taxes.command';
import { GetAllFilesIrpRoadTaxesQuery } from '../../cqrs/queries/impl/get-all-files-irp-road-taxes.query';
import { FilesIrpRoadTaxesMapper } from '../../mapper/files-irp-road-taxes.mapper';
import { UpdateFilesIrpRoadTaxesInput } from '../dto/inputs/update-files-irp-road-taxes.input';
import { UpdateFilesIrpRoadTaxesCommand } from '../../cqrs/commands/impl/update-files-irp-road-taxes.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesIrpRoadTaxesInput } from '../dto/inputs/get-paginated-files-irp-road-taxes.input';
import { PaginatedFilesIrpRoadTaxesResponse } from '../dto/responses/paginated-files-irp-road-taxes.response';
import { GetPaginatedFilesIrpRoadTaxesQuery } from '../../cqrs/queries/impl/get-paginated-files-irp-road-taxes.query';
import { GetOneFilesIrpRoadTaxesInput } from '../dto/inputs/get-one-files-irp-road-taxes.input';
import { GetOneFilesIrpRoadTaxesQuery } from '../../cqrs/queries/impl/get-one-files-irp-road-taxes.query';
import { DeleteManyFilesIrpRoadTaxesInput } from '../dto/inputs/delete-many-files-irp-road-taxes.input';
import { DeleteManyFilesIrpRoadTaxesCommand } from '../../cqrs/commands/impl/delete-many-files-irp-road-taxes.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesIrpRoadTaxesEntity } from '../../entities/files-irp-road-taxes.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesIrpRoadTaxesResponse)
export class FilesIrpRoadTaxesResolver extends BaseResolver {
  constructor(
    private readonly _filesIrpRoadTaxesMapper: FilesIrpRoadTaxesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesIrpRoadTaxes(
    @Args('input') input: CreateFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesIrpRoadTaxesCommand(
      this._filesIrpRoadTaxesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesIrpRoadTaxes(
    @Args('input') { update, entityId }: UpdateFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesIrpRoadTaxesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesIrpRoadTaxes(
    @Args('input') { entityId }: DeleteFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesIrpRoadTaxesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesIrpRoadTaxes(
    @Args('input') input: DeleteManyFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesIrpRoadTaxesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesIrpRoadTaxesResponse])
  async getAllFilesIrpRoadTaxes(
    @Args('input', { nullable: true }) input: GetAllFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesIrpRoadTaxesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesIrpRoadTaxesEntity>>>(new GetAllFilesIrpRoadTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesIrpRoadTaxesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesIrpRoadTaxesResponse, { nullable: true })
  async getOneFilesIrpRoadTaxes(
    @Args('input', { nullable: true }) input: GetOneFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesIrpRoadTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesIrpRoadTaxesEntity>>(new GetOneFilesIrpRoadTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesIrpRoadTaxesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IRP_ROAD_TAXES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesIrpRoadTaxesResponse, { nullable: true })
  async getPaginatedFilesIrpRoadTaxes(
    @Args('input', { nullable: true }) input: GetPaginatedFilesIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesIrpRoadTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesIrpRoadTaxesEntity>>>(new GetPaginatedFilesIrpRoadTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesIrpRoadTaxesMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesIrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.file) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.file.id },
        },
      }));
      if (fileOrErr.isFailure) {
        return null;
      }
      const file = fileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



}

import { Args, Mutation, Query, Resolver, Parent, ResolveField} from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesIftaFuelTaxesInput } from '../dto/inputs/create-files-ifta-fuel-taxes.input';
import { FilesIftaFuelTaxesResponse } from '../dto/responses/files-ifta-fuel-taxes.response';
import { GetAllFilesIftaFuelTaxesInput } from '../dto/inputs/get-all-files-ifta-fuel-taxes.input';
import { DeleteFilesIftaFuelTaxesInput } from '../dto/inputs/delete-files-ifta-fuel-taxes.input';
import { CreateFilesIftaFuelTaxesCommand } from '../../cqrs/commands/impl/create-files-ifta-fuel-taxes.command';
import { DeleteFilesIftaFuelTaxesCommand } from '../../cqrs/commands/impl/delete-files-ifta-fuel-taxes.command';
import { GetAllFilesIftaFuelTaxesQuery } from '../../cqrs/queries/impl/get-all-files-ifta-fuel-taxes.query';
import { FilesIftaFuelTaxesMapper } from '../../mapper/files-ifta-fuel-taxes.mapper';
import { UpdateFilesIftaFuelTaxesInput } from '../dto/inputs/update-files-ifta-fuel-taxes.input';
import { UpdateFilesIftaFuelTaxesCommand } from '../../cqrs/commands/impl/update-files-ifta-fuel-taxes.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesIftaFuelTaxesInput } from '../dto/inputs/get-paginated-files-ifta-fuel-taxes.input';
import { PaginatedFilesIftaFuelTaxesResponse } from '../dto/responses/paginated-files-ifta-fuel-taxes.response';
import { GetPaginatedFilesIftaFuelTaxesQuery } from '../../cqrs/queries/impl/get-paginated-files-ifta-fuel-taxes.query';
import { GetOneFilesIftaFuelTaxesInput } from '../dto/inputs/get-one-files-ifta-fuel-taxes.input';
import { GetOneFilesIftaFuelTaxesQuery } from '../../cqrs/queries/impl/get-one-files-ifta-fuel-taxes.query';
import { DeleteManyFilesIftaFuelTaxesInput } from '../dto/inputs/delete-many-files-ifta-fuel-taxes.input';
import { DeleteManyFilesIftaFuelTaxesCommand } from '../../cqrs/commands/impl/delete-many-files-ifta-fuel-taxes.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesIftaFuelTaxesEntity } from '../../entities/files-ifta-fuel-taxes.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesIftaFuelTaxesResponse)
export class FilesIftaFuelTaxesResolver extends BaseResolver {
  constructor(
    private readonly _filesIftaFuelTaxesMapper: FilesIftaFuelTaxesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesIftaFuelTaxes(
    @Args('input') input: CreateFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesIftaFuelTaxesCommand(
      this._filesIftaFuelTaxesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesIftaFuelTaxes(
    @Args('input') { update, entityId }: UpdateFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesIftaFuelTaxesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesIftaFuelTaxes(
    @Args('input') { entityId }: DeleteFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesIftaFuelTaxesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesIftaFuelTaxes(
    @Args('input') input: DeleteManyFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesIftaFuelTaxesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesIftaFuelTaxesResponse])
  async getAllFilesIftaFuelTaxes(
    @Args('input', { nullable: true }) input: GetAllFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesIftaFuelTaxesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesIftaFuelTaxesEntity>>>(new GetAllFilesIftaFuelTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesIftaFuelTaxesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesIftaFuelTaxesResponse, { nullable: true })
  async getOneFilesIftaFuelTaxes(
    @Args('input', { nullable: true }) input: GetOneFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesIftaFuelTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesIftaFuelTaxesEntity>>(new GetOneFilesIftaFuelTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesIftaFuelTaxesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_IFTA_FUEL_TAXES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesIftaFuelTaxesResponse, { nullable: true })
  async getPaginatedFilesIftaFuelTaxes(
    @Args('input', { nullable: true }) input: GetPaginatedFilesIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesIftaFuelTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesIftaFuelTaxesEntity>>>(new GetPaginatedFilesIftaFuelTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesIftaFuelTaxesMapper.persistent2Dto),
    };
  }


 

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesIftaFuelTaxesResponse): Promise<CloudFileResponse> {
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

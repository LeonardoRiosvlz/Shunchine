import { Args, Mutation, Query, Resolver,Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesCorporationEinInput } from '../dto/inputs/create-files-corporation-ein.input';
import { FilesCorporationEinResponse } from '../dto/responses/files-corporation-ein.response';
import { GetAllFilesCorporationEinInput } from '../dto/inputs/get-all-files-corporation-ein.input';
import { DeleteFilesCorporationEinInput } from '../dto/inputs/delete-files-corporation-ein.input';
import { CreateFilesCorporationEinCommand } from '../../cqrs/commands/impl/create-files-corporation-ein.command';
import { DeleteFilesCorporationEinCommand } from '../../cqrs/commands/impl/delete-files-corporation-ein.command';
import { GetAllFilesCorporationEinQuery } from '../../cqrs/queries/impl/get-all-files-corporation-ein.query';
import { FilesCorporationEinMapper } from '../../mapper/files-corporation-ein.mapper';
import { UpdateFilesCorporationEinInput } from '../dto/inputs/update-files-corporation-ein.input';
import { UpdateFilesCorporationEinCommand } from '../../cqrs/commands/impl/update-files-corporation-ein.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesCorporationEinInput } from '../dto/inputs/get-paginated-files-corporation-ein.input';
import { PaginatedFilesCorporationEinResponse } from '../dto/responses/paginated-files-corporation-ein.response';
import { GetPaginatedFilesCorporationEinQuery } from '../../cqrs/queries/impl/get-paginated-files-corporation-ein.query';
import { GetOneFilesCorporationEinInput } from '../dto/inputs/get-one-files-corporation-ein.input';
import { GetOneFilesCorporationEinQuery } from '../../cqrs/queries/impl/get-one-files-corporation-ein.query';
import { DeleteManyFilesCorporationEinInput } from '../dto/inputs/delete-many-files-corporation-ein.input';
import { DeleteManyFilesCorporationEinCommand } from '../../cqrs/commands/impl/delete-many-files-corporation-ein.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesCorporationEinEntity } from '../../entities/files-corporation-ein.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import {CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesCorporationEinResponse)
export class FilesCorporationEinResolver extends BaseResolver {
  constructor(
    private readonly _filesCorporationEinMapper: FilesCorporationEinMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesCorporationEin(
    @Args('input') input: CreateFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesCorporationEinCommand(
      this._filesCorporationEinMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesCorporationEin(
    @Args('input') { update, entityId }: UpdateFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesCorporationEinCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesCorporationEin(
    @Args('input') { entityId }: DeleteFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesCorporationEinCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesCorporationEin(
    @Args('input') input: DeleteManyFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesCorporationEinCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesCorporationEinResponse])
  async getAllFilesCorporationEin(
    @Args('input', { nullable: true }) input: GetAllFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesCorporationEinResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesCorporationEinEntity>>>(new GetAllFilesCorporationEinQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesCorporationEinMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesCorporationEinResponse, { nullable: true })
  async getOneFilesCorporationEin(
    @Args('input', { nullable: true }) input: GetOneFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesCorporationEinResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesCorporationEinEntity>>(new GetOneFilesCorporationEinQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesCorporationEinMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_CORPORATION_EIN'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesCorporationEinResponse, { nullable: true })
  async getPaginatedFilesCorporationEin(
    @Args('input', { nullable: true }) input: GetPaginatedFilesCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesCorporationEinResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesCorporationEinEntity>>>(new GetPaginatedFilesCorporationEinQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesCorporationEinMapper.persistent2Dto),
    };
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesCorporationEinResponse): Promise<CloudFileResponse> {
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

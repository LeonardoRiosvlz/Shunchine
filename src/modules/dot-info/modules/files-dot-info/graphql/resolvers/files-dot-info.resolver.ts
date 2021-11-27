import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesDotInfoInput } from '../dto/inputs/create-files-dot-info.input';
import { FilesDotInfoResponse } from '../dto/responses/files-dot-info.response';
import { GetAllFilesDotInfoInput } from '../dto/inputs/get-all-files-dot-info.input';
import { DeleteFilesDotInfoInput } from '../dto/inputs/delete-files-dot-info.input';
import { CreateFilesDotInfoCommand } from '../../cqrs/commands/impl/create-files-dot-info.command';
import { DeleteFilesDotInfoCommand } from '../../cqrs/commands/impl/delete-files-dot-info.command';
import { GetAllFilesDotInfoQuery } from '../../cqrs/queries/impl/get-all-files-dot-info.query';
import { FilesDotInfoMapper } from '../../mapper/files-dot-info.mapper';
import { UpdateFilesDotInfoInput } from '../dto/inputs/update-files-dot-info.input';
import { UpdateFilesDotInfoCommand } from '../../cqrs/commands/impl/update-files-dot-info.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesDotInfoInput } from '../dto/inputs/get-paginated-files-dot-info.input';
import { PaginatedFilesDotInfoResponse } from '../dto/responses/paginated-files-dot-info.response';
import { GetPaginatedFilesDotInfoQuery } from '../../cqrs/queries/impl/get-paginated-files-dot-info.query';
import { GetOneFilesDotInfoInput } from '../dto/inputs/get-one-files-dot-info.input';
import { GetOneFilesDotInfoQuery } from '../../cqrs/queries/impl/get-one-files-dot-info.query';
import { DeleteManyFilesDotInfoInput } from '../dto/inputs/delete-many-files-dot-info.input';
import { DeleteManyFilesDotInfoCommand } from '../../cqrs/commands/impl/delete-many-files-dot-info.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesDotInfoEntity } from '../../entities/files-dot-info.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import {CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';





@Resolver(() => FilesDotInfoResponse)
export class FilesDotInfoResolver extends BaseResolver {
  constructor(
    private readonly _filesDotInfoMapper: FilesDotInfoMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesDotInfo(
    @Args('input') input: CreateFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesDotInfoCommand(
      this._filesDotInfoMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesDotInfo(
    @Args('input') { update, entityId }: UpdateFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesDotInfoCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesDotInfo(
    @Args('input') { entityId }: DeleteFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesDotInfoCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesDotInfo(
    @Args('input') input: DeleteManyFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesDotInfoCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesDotInfoResponse])
  async getAllFilesDotInfo(
    @Args('input', { nullable: true }) input: GetAllFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesDotInfoResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesDotInfoEntity>>>(new GetAllFilesDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesDotInfoMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesDotInfoResponse, { nullable: true })
  async getOneFilesDotInfo(
    @Args('input', { nullable: true }) input: GetOneFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesDotInfoResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesDotInfoEntity>>(new GetOneFilesDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesDotInfoMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_DOT_INFO'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesDotInfoResponse, { nullable: true })
  async getPaginatedFilesDotInfo(
    @Args('input', { nullable: true }) input: GetPaginatedFilesDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesDotInfoResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesDotInfoEntity>>>(new GetPaginatedFilesDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesDotInfoMapper.persistent2Dto),
    };
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesDotInfoResponse): Promise<CloudFileResponse> {
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

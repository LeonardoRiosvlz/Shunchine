import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesTrailerRentalInput } from '../dto/inputs/create-files-trailer-rental.input';
import { FilesTrailerRentalResponse } from '../dto/responses/files-trailer-rental.response';
import { GetAllFilesTrailerRentalInput } from '../dto/inputs/get-all-files-trailer-rental.input';
import { DeleteFilesTrailerRentalInput } from '../dto/inputs/delete-files-trailer-rental.input';
import { CreateFilesTrailerRentalCommand } from '../../cqrs/commands/impl/create-files-trailer-rental.command';
import { DeleteFilesTrailerRentalCommand } from '../../cqrs/commands/impl/delete-files-trailer-rental.command';
import { GetAllFilesTrailerRentalQuery } from '../../cqrs/queries/impl/get-all-files-trailer-rental.query';
import { FilesTrailerRentalMapper } from '../../mapper/files-trailer-rental.mapper';
import { UpdateFilesTrailerRentalInput } from '../dto/inputs/update-files-trailer-rental.input';
import { UpdateFilesTrailerRentalCommand } from '../../cqrs/commands/impl/update-files-trailer-rental.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesTrailerRentalInput } from '../dto/inputs/get-paginated-files-trailer-rental.input';
import { PaginatedFilesTrailerRentalResponse } from '../dto/responses/paginated-files-trailer-rental.response';
import { GetPaginatedFilesTrailerRentalQuery } from '../../cqrs/queries/impl/get-paginated-files-trailer-rental.query';
import { GetOneFilesTrailerRentalInput } from '../dto/inputs/get-one-files-trailer-rental.input';
import { GetOneFilesTrailerRentalQuery } from '../../cqrs/queries/impl/get-one-files-trailer-rental.query';
import { DeleteManyFilesTrailerRentalInput } from '../dto/inputs/delete-many-files-trailer-rental.input';
import { DeleteManyFilesTrailerRentalCommand } from '../../cqrs/commands/impl/delete-many-files-trailer-rental.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesTrailerRentalEntity } from '../../entities/files-trailer-rental.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesTrailerRentalResponse)
export class FilesTrailerRentalResolver extends BaseResolver {
  constructor(
    private readonly _filesTrailerRentalMapper: FilesTrailerRentalMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesTrailerRental(
    @Args('input') input: CreateFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesTrailerRentalCommand(
      this._filesTrailerRentalMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesTrailerRental(
    @Args('input') { update, entityId }: UpdateFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesTrailerRentalCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesTrailerRental(
    @Args('input') { entityId }: DeleteFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesTrailerRentalCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesTrailerRental(
    @Args('input') input: DeleteManyFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesTrailerRentalCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesTrailerRentalResponse])
  async getAllFilesTrailerRental(
    @Args('input', { nullable: true }) input: GetAllFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesTrailerRentalResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesTrailerRentalEntity>>>(new GetAllFilesTrailerRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesTrailerRentalMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesTrailerRentalResponse, { nullable: true })
  async getOneFilesTrailerRental(
    @Args('input', { nullable: true }) input: GetOneFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesTrailerRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesTrailerRentalEntity>>(new GetOneFilesTrailerRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesTrailerRentalMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_TRAILER_RENTAL'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesTrailerRentalResponse, { nullable: true })
  async getPaginatedFilesTrailerRental(
    @Args('input', { nullable: true }) input: GetPaginatedFilesTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesTrailerRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesTrailerRentalEntity>>>(new GetPaginatedFilesTrailerRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesTrailerRentalMapper.persistent2Dto),
    };
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesTrailerRentalResponse): Promise<CloudFileResponse> {
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

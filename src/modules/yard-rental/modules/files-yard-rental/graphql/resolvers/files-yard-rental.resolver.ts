import { Args, Mutation, Query, Resolver, Parent,ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesYardRentalInput } from '../dto/inputs/create-files-yard-rental.input';
import { FilesYardRentalResponse } from '../dto/responses/files-yard-rental.response';
import { GetAllFilesYardRentalInput } from '../dto/inputs/get-all-files-yard-rental.input';
import { DeleteFilesYardRentalInput } from '../dto/inputs/delete-files-yard-rental.input';
import { CreateFilesYardRentalCommand } from '../../cqrs/commands/impl/create-files-yard-rental.command';
import { DeleteFilesYardRentalCommand } from '../../cqrs/commands/impl/delete-files-yard-rental.command';
import { GetAllFilesYardRentalQuery } from '../../cqrs/queries/impl/get-all-files-yard-rental.query';
import { FilesYardRentalMapper } from '../../mapper/files-yard-rental.mapper';
import { UpdateFilesYardRentalInput } from '../dto/inputs/update-files-yard-rental.input';
import { UpdateFilesYardRentalCommand } from '../../cqrs/commands/impl/update-files-yard-rental.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesYardRentalInput } from '../dto/inputs/get-paginated-files-yard-rental.input';
import { PaginatedFilesYardRentalResponse } from '../dto/responses/paginated-files-yard-rental.response';
import { GetPaginatedFilesYardRentalQuery } from '../../cqrs/queries/impl/get-paginated-files-yard-rental.query';
import { GetOneFilesYardRentalInput } from '../dto/inputs/get-one-files-yard-rental.input';
import { GetOneFilesYardRentalQuery } from '../../cqrs/queries/impl/get-one-files-yard-rental.query';
import { DeleteManyFilesYardRentalInput } from '../dto/inputs/delete-many-files-yard-rental.input';
import { DeleteManyFilesYardRentalCommand } from '../../cqrs/commands/impl/delete-many-files-yard-rental.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesYardRentalEntity } from '../../entities/files-yard-rental.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesYardRentalResponse)
export class FilesYardRentalResolver extends BaseResolver {
  constructor(
    private readonly _filesYardRentalMapper: FilesYardRentalMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesYardRental(
    @Args('input') input: CreateFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesYardRentalCommand(
      this._filesYardRentalMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesYardRental(
    @Args('input') { update, entityId }: UpdateFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesYardRentalCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesYardRental(
    @Args('input') { entityId }: DeleteFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesYardRentalCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesYardRental(
    @Args('input') input: DeleteManyFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesYardRentalCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesYardRentalResponse])
  async getAllFilesYardRental(
    @Args('input', { nullable: true }) input: GetAllFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesYardRentalResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesYardRentalEntity>>>(new GetAllFilesYardRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesYardRentalMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesYardRentalResponse, { nullable: true })
  async getOneFilesYardRental(
    @Args('input', { nullable: true }) input: GetOneFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesYardRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesYardRentalEntity>>(new GetOneFilesYardRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesYardRentalMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_YARD_RENTAL'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesYardRentalResponse, { nullable: true })
  async getPaginatedFilesYardRental(
    @Args('input', { nullable: true }) input: GetPaginatedFilesYardRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesYardRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesYardRentalEntity>>>(new GetPaginatedFilesYardRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesYardRentalMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesYardRentalResponse): Promise<CloudFileResponse> {
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

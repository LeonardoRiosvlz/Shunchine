import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateTrailerRentalInput } from '../dto/inputs/create-trailer-rental.input';
import { TrailerRentalResponse } from '../dto/responses/trailer-rental.response';
import { GetAllTrailerRentalInput } from '../dto/inputs/get-all-trailer-rental.input';
import { DeleteTrailerRentalInput } from '../dto/inputs/delete-trailer-rental.input';
import { CreateTrailerRentalCommand } from '../../cqrs/commands/impl/create-trailer-rental.command';
import { DeleteTrailerRentalCommand } from '../../cqrs/commands/impl/delete-trailer-rental.command';
import { GetAllTrailerRentalQuery } from '../../cqrs/queries/impl/get-all-trailer-rental.query';
import { TrailerRentalMapper } from '../../mapper/trailer-rental.mapper';
import { UpdateTrailerRentalInput } from '../dto/inputs/update-trailer-rental.input';
import { UpdateTrailerRentalCommand } from '../../cqrs/commands/impl/update-trailer-rental.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedTrailerRentalInput } from '../dto/inputs/get-paginated-trailer-rental.input';
import { PaginatedTrailerRentalResponse } from '../dto/responses/paginated-trailer-rental.response';
import { GetPaginatedTrailerRentalQuery } from '../../cqrs/queries/impl/get-paginated-trailer-rental.query';
import { GetOneTrailerRentalInput } from '../dto/inputs/get-one-trailer-rental.input';
import { GetOneTrailerRentalQuery } from '../../cqrs/queries/impl/get-one-trailer-rental.query';
import { DeleteManyTrailerRentalInput } from '../dto/inputs/delete-many-trailer-rental.input';
import { DeleteManyTrailerRentalCommand } from '../../cqrs/commands/impl/delete-many-trailer-rental.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { TrailerRentalEntity } from '../../entities/trailer-rental.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response'; 
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => TrailerRentalResponse)
export class TrailerRentalResolver extends BaseResolver {
  constructor(
    private readonly _trailerRentalMapper: TrailerRentalMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createTrailerRental(
    @Args('input') input: CreateTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateTrailerRentalCommand(
      this._trailerRentalMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateTrailerRental(
    @Args('input') { update, entityId }: UpdateTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateTrailerRentalCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteTrailerRental(
    @Args('input') { entityId }: DeleteTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteTrailerRentalCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyTrailerRental(
    @Args('input') input: DeleteManyTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyTrailerRentalCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[TrailerRentalResponse])
  async getAllTrailerRental(
    @Args('input', { nullable: true }) input: GetAllTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<TrailerRentalResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<TrailerRentalEntity>>>(new GetAllTrailerRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._trailerRentalMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.GET_ONE})
  @Query(() => TrailerRentalResponse, { nullable: true })
  async getOneTrailerRental(
    @Args('input', { nullable: true }) input: GetOneTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<TrailerRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<TrailerRentalEntity>>(new GetOneTrailerRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._trailerRentalMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['TRAILER_RENTAL'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedTrailerRentalResponse, { nullable: true })
  async getPaginatedTrailerRental(
    @Args('input', { nullable: true }) input: GetPaginatedTrailerRentalInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedTrailerRentalResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<TrailerRentalEntity>>>(new GetPaginatedTrailerRentalQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._trailerRentalMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: TrailerRentalResponse): Promise<CloudFileResponse> {
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

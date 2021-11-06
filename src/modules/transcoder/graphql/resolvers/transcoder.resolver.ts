import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateTranscoderInput } from '../dto/inputs/create-transcoder.input';
import { TranscoderResponse } from '../dto/responses/transcoder.response';
import { GetAllTranscoderInput } from '../dto/inputs/get-all-transcoder.input';
import { DeleteTranscoderInput } from '../dto/inputs/delete-transcoder.input';
import { CreateTranscoderCommand } from '../../cqrs/commands/impl/create-transcoder.command';
import { DeleteTranscoderCommand } from '../../cqrs/commands/impl/delete-transcoder.command';
import { GetAllTranscoderQuery } from '../../cqrs/queries/impl/get-all-transcoder.query';
import { TranscoderMapper } from '../../mapper/transcoder.mapper';
import { UpdateTranscoderInput } from '../dto/inputs/update-transcoder.input';
import { UpdateTranscoderCommand } from '../../cqrs/commands/impl/update-transcoder.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedTranscoderInput } from '../dto/inputs/get-paginated-transcoder.input';
import { PaginatedTranscoderResponse } from '../dto/responses/paginated-transcoder.response';
import { GetPaginatedTranscoderQuery } from '../../cqrs/queries/impl/get-paginated-transcoder.query';
import { GetOneTranscoderInput } from '../dto/inputs/get-one-transcoder.input';
import { GetOneTranscoderQuery } from '../../cqrs/queries/impl/get-one-transcoder.query';
import { DeleteManyTranscoderInput } from '../dto/inputs/delete-many-transcoder.input';
import { DeleteManyTranscoderCommand } from '../../cqrs/commands/impl/delete-many-transcoder.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { TranscoderEntity } from '../../entities/transcoder.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CurrentUser } from 'src/shared/modules/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/shared/modules/auth/types/auth-user.type';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { TranscodeCommand } from '../../cqrs/commands/impl/transcode.command';
import { TranscodeInput } from '../dto/inputs/transcoder.input';


@Resolver(() => TranscoderResponse)
export class TranscoderResolver extends BaseResolver {
  constructor(
    private readonly _transcoderMapper: TranscoderMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.CREATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createTranscoder(
    @Args('input') input: CreateTranscoderInput,
    @CurrentUser() user: AuthUser,

    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateTranscoderCommand(
      this._transcoderMapper.dtoInput2Persistent({ ...input, user: user.userId })
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.UPDATE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateTranscoder(
    @Args('input') { update, entityId }: UpdateTranscoderInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateTranscoderCommand(entityId, update));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.DELETE_ONE })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteTranscoder(
    @Args('input') { entityId }: DeleteTranscoderInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteTranscoderCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.DELETE_MANY })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyTranscoder(
    @Args('input') input: DeleteManyTranscoderInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyTranscoderCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.GET_ALL })
  @Query(() => [TranscoderResponse])
  async getAllTranscoder(
    @Args('input', { nullable: true }) input: GetAllTranscoderInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<TranscoderResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<TranscoderEntity>>>(new GetAllTranscoderQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._transcoderMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.GET_ONE })
  @Query(() => TranscoderResponse, { nullable: true })
  async getOneTranscoder(
    @Args('input', { nullable: true }) input: GetOneTranscoderInput,
    @CurrentLanguage() lang?: string,
  ): Promise<TranscoderResponse> {
    const resp = await this._cqrsBus.execQuery<Result<TranscoderEntity>>(new GetOneTranscoderQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._transcoderMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.GET_PAGINATED })
  @Query(() => PaginatedTranscoderResponse, { nullable: true })
  async getPaginatedTranscoder(
    @Args('input', { nullable: true }) input: GetPaginatedTranscoderInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedTranscoderResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<TranscoderEntity>>>(new GetPaginatedTranscoderQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._transcoderMapper.persistent2Dto),
    };
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({ module: APP_MODULES['TRANSCODER'], action: ACTION_LIST.TRANSCODER_TRANSCODER })
  @Mutation(() => GraphQLVoid, { nullable: true })
  async transcode(
    @Args('input') input: TranscodeInput,

    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new TranscodeCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async mediaFile(@Parent() parent?: TranscoderResponse): Promise<CloudFileResponse> {
    if (parent?.mediaFile) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.mediaFile.id },
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

  @ResolveField(() => SolvedEntityResponse, { nullable: true })
  async user(@Parent() parent?: TranscoderResponse): Promise<SolvedEntityResponse> {
    if (parent?.user) {
      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({
        where: {
          id: { eq: parent.user.id },
        },
      }));
      if (userOrErr.isFailure) {
        return null;
      }
      const user = userOrErr.unwrap();

      return {
        id: user.id,
        entityName: UserEntity.name,
        identifier: `${user.firstname} ${user?.lastname}`

      };
    }
  }


}

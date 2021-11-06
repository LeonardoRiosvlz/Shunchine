import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFfmpgTemplateInput } from '../dto/inputs/create-ffmpg-template.input';
import { FfmpgTemplateResponse } from '../dto/responses/ffmpg-template.response';
import { GetAllFfmpgTemplateInput } from '../dto/inputs/get-all-ffmpg-template.input';
import { DeleteFfmpgTemplateInput } from '../dto/inputs/delete-ffmpg-template.input';
import { CreateFfmpgTemplateCommand } from '../../cqrs/commands/impl/create-ffmpg-template.command';
import { DeleteFfmpgTemplateCommand } from '../../cqrs/commands/impl/delete-ffmpg-template.command';
import { GetAllFfmpgTemplateQuery } from '../../cqrs/queries/impl/get-all-ffmpg-template.query';
import { FfmpgTemplateMapper } from '../../mapper/ffmpg-template.mapper';
import { UpdateFfmpgTemplateInput } from '../dto/inputs/update-ffmpg-template.input';
import { UpdateFfmpgTemplateCommand } from '../../cqrs/commands/impl/update-ffmpg-template.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFfmpgTemplateInput } from '../dto/inputs/get-paginated-ffmpg-template.input';
import { PaginatedFfmpgTemplateResponse } from '../dto/responses/paginated-ffmpg-template.response';
import { GetPaginatedFfmpgTemplateQuery } from '../../cqrs/queries/impl/get-paginated-ffmpg-template.query';
import { GetOneFfmpgTemplateInput } from '../dto/inputs/get-one-ffmpg-template.input';
import { GetOneFfmpgTemplateQuery } from '../../cqrs/queries/impl/get-one-ffmpg-template.query';
import { DeleteManyFfmpgTemplateInput } from '../dto/inputs/delete-many-ffmpg-template.input';
import { DeleteManyFfmpgTemplateCommand } from '../../cqrs/commands/impl/delete-many-ffmpg-template.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FfmpgTemplateEntity } from '../../entities/ffmpg-template.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { FfmpgOptionEntity } from 'src/modules/ffmpg-option/entities/ffmpg-option.entity';
import { GetAllFfmpgOptionQuery } from 'src/modules/ffmpg-option/cqrs/queries/impl/get-all-ffmpg-option.query';


@Resolver(() => FfmpgTemplateResponse)
export class FfmpgTemplateResolver extends BaseResolver {
  constructor(
    private readonly _ffmpgTemplateMapper: FfmpgTemplateMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFfmpgTemplate(
    @Args('input') input: CreateFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFfmpgTemplateCommand(
      this._ffmpgTemplateMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFfmpgTemplate(
    @Args('input') { update, entityId }: UpdateFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFfmpgTemplateCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFfmpgTemplate(
    @Args('input') { entityId }: DeleteFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFfmpgTemplateCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFfmpgTemplate(
    @Args('input') input: DeleteManyFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFfmpgTemplateCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FfmpgTemplateResponse])
  async getAllFfmpgTemplate(
    @Args('input', { nullable: true }) input: GetAllFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FfmpgTemplateResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FfmpgTemplateEntity>>>(new GetAllFfmpgTemplateQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._ffmpgTemplateMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.GET_ONE})
  @Query(() => FfmpgTemplateResponse, { nullable: true })
  async getOneFfmpgTemplate(
    @Args('input', { nullable: true }) input: GetOneFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FfmpgTemplateResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FfmpgTemplateEntity>>(new GetOneFfmpgTemplateQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._ffmpgTemplateMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FFMPG_TEMPLATE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFfmpgTemplateResponse, { nullable: true })
  async getPaginatedFfmpgTemplate(
    @Args('input', { nullable: true }) input: GetPaginatedFfmpgTemplateInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFfmpgTemplateResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FfmpgTemplateEntity>>>(new GetPaginatedFfmpgTemplateQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._ffmpgTemplateMapper.persistent2Dto),
    };
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async ffmpgOpts(@Parent() parent?: FfmpgTemplateResponse): Promise<Array<SolvedEntityResponse>> {
    if (parent?.ffmpgOpts) {
      const ffmpgOptsPrErr = await this._cqrsBus.execQuery<Result<Array<FfmpgOptionEntity>>>(new GetAllFfmpgOptionQuery({
        where: {
          id: { in: parent.ffmpgOpts.map(x => x.id) },
        },
      }));
      if (ffmpgOptsPrErr.isFailure) {
        return [];
      }
      const options = ffmpgOptsPrErr.unwrap();

      return options.map((opt) => {
        return {
          id: opt.id,
          entityName: FfmpgOptionEntity.name,
          identifier: opt.option
        };
      })
    }
  }


}

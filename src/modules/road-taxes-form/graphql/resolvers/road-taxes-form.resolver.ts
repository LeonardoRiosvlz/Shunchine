import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateRoadTaxesFormInput } from '../dto/inputs/create-road-taxes-form.input';
import { RoadTaxesFormResponse } from '../dto/responses/road-taxes-form.response';
import { GetAllRoadTaxesFormInput } from '../dto/inputs/get-all-road-taxes-form.input';
import { DeleteRoadTaxesFormInput } from '../dto/inputs/delete-road-taxes-form.input';
import { CreateRoadTaxesFormCommand } from '../../cqrs/commands/impl/create-road-taxes-form.command';
import { DeleteRoadTaxesFormCommand } from '../../cqrs/commands/impl/delete-road-taxes-form.command';
import { GetAllRoadTaxesFormQuery } from '../../cqrs/queries/impl/get-all-road-taxes-form.query';
import { RoadTaxesFormMapper } from '../../mapper/road-taxes-form.mapper';
import { UpdateRoadTaxesFormInput } from '../dto/inputs/update-road-taxes-form.input';
import { UpdateRoadTaxesFormCommand } from '../../cqrs/commands/impl/update-road-taxes-form.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedRoadTaxesFormInput } from '../dto/inputs/get-paginated-road-taxes-form.input';
import { PaginatedRoadTaxesFormResponse } from '../dto/responses/paginated-road-taxes-form.response';
import { GetPaginatedRoadTaxesFormQuery } from '../../cqrs/queries/impl/get-paginated-road-taxes-form.query';
import { GetOneRoadTaxesFormInput } from '../dto/inputs/get-one-road-taxes-form.input';
import { GetOneRoadTaxesFormQuery } from '../../cqrs/queries/impl/get-one-road-taxes-form.query';
import { DeleteManyRoadTaxesFormInput } from '../dto/inputs/delete-many-road-taxes-form.input';
import { DeleteManyRoadTaxesFormCommand } from '../../cqrs/commands/impl/delete-many-road-taxes-form.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { RoadTaxesFormEntity } from '../../entities/road-taxes-form.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ClientEntity } from 'src/modules/client/entities/client.entity';


@Resolver(() => RoadTaxesFormResponse)
export class RoadTaxesFormResolver extends BaseResolver {
  constructor(
    private readonly _roadTaxesFormMapper: RoadTaxesFormMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createRoadTaxesForm(
    @Args('input') input: CreateRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateRoadTaxesFormCommand(
      this._roadTaxesFormMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateRoadTaxesForm(
    @Args('input') { update, entityId }: UpdateRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateRoadTaxesFormCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteRoadTaxesForm(
    @Args('input') { entityId }: DeleteRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteRoadTaxesFormCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyRoadTaxesForm(
    @Args('input') input: DeleteManyRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyRoadTaxesFormCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[RoadTaxesFormResponse])
  async getAllRoadTaxesForm(
    @Args('input', { nullable: true }) input: GetAllRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<RoadTaxesFormResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<RoadTaxesFormEntity>>>(new GetAllRoadTaxesFormQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._roadTaxesFormMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.GET_ONE})
  @Query(() => RoadTaxesFormResponse, { nullable: true })
  async getOneRoadTaxesForm(
    @Args('input', { nullable: true }) input: GetOneRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<RoadTaxesFormResponse> {
    const resp = await this._cqrsBus.execQuery<Result<RoadTaxesFormEntity>>(new GetOneRoadTaxesFormQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._roadTaxesFormMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ROAD_TAXES_FORM'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedRoadTaxesFormResponse, { nullable: true })
  async getPaginatedRoadTaxesForm(
    @Args('input', { nullable: true }) input: GetPaginatedRoadTaxesFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedRoadTaxesFormResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<RoadTaxesFormEntity>>>(new GetPaginatedRoadTaxesFormQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._roadTaxesFormMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async client(@Parent() parent?: RoadTaxesFormResponse): Promise<SolvedEntityResponse> {
    if (parent?.client) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<ClientEntity>>(new GetOneRoadTaxesFormQuery({where:{
             id: {eq: parent.client.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const client = patientOrErr.unwrap();

        return {
          id: client.id,
          entityName: ClientEntity.name,
          identifier: client.companyName,
          fields: [
            {
              field: 'contactOfficePhone',
              value: client.contactOfficePhone
            }
          ]
        }
    }
  }




}

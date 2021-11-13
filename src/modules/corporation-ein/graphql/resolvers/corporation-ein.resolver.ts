import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateCorporationEinInput } from '../dto/inputs/create-corporation-ein.input';
import { CorporationEinResponse } from '../dto/responses/corporation-ein.response';
import { GetAllCorporationEinInput } from '../dto/inputs/get-all-corporation-ein.input';
import { DeleteCorporationEinInput } from '../dto/inputs/delete-corporation-ein.input';
import { CreateCorporationEinCommand } from '../../cqrs/commands/impl/create-corporation-ein.command';
import { DeleteCorporationEinCommand } from '../../cqrs/commands/impl/delete-corporation-ein.command';
import { GetAllCorporationEinQuery } from '../../cqrs/queries/impl/get-all-corporation-ein.query';
import { CorporationEinMapper } from '../../mapper/corporation-ein.mapper';
import { UpdateCorporationEinInput } from '../dto/inputs/update-corporation-ein.input';
import { UpdateCorporationEinCommand } from '../../cqrs/commands/impl/update-corporation-ein.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedCorporationEinInput } from '../dto/inputs/get-paginated-corporation-ein.input';
import { PaginatedCorporationEinResponse } from '../dto/responses/paginated-corporation-ein.response';
import { GetPaginatedCorporationEinQuery } from '../../cqrs/queries/impl/get-paginated-corporation-ein.query';
import { GetOneCorporationEinInput } from '../dto/inputs/get-one-corporation-ein.input';
import { GetOneCorporationEinQuery } from '../../cqrs/queries/impl/get-one-corporation-ein.query';
import { DeleteManyCorporationEinInput } from '../dto/inputs/delete-many-corporation-ein.input';
import { DeleteManyCorporationEinCommand } from '../../cqrs/commands/impl/delete-many-corporation-ein.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { CorporationEinEntity } from '../../entities/corporation-ein.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { GetOneClientQuery } from 'src/modules/client/cqrs/queries/impl/get-one-client.query';

@Resolver(() => CorporationEinResponse)
export class CorporationEinResolver extends BaseResolver {
  constructor(
    private readonly _corporationEinMapper: CorporationEinMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createCorporationEin(
    @Args('input') input: CreateCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateCorporationEinCommand(
      this._corporationEinMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateCorporationEin(
    @Args('input') { update, entityId }: UpdateCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateCorporationEinCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteCorporationEin(
    @Args('input') { entityId }: DeleteCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteCorporationEinCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyCorporationEin(
    @Args('input') input: DeleteManyCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyCorporationEinCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[CorporationEinResponse])
  async getAllCorporationEin(
    @Args('input', { nullable: true }) input: GetAllCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<CorporationEinResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<CorporationEinEntity>>>(new GetAllCorporationEinQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._corporationEinMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.GET_ONE})
  @Query(() => CorporationEinResponse, { nullable: true })
  async getOneCorporationEin(
    @Args('input', { nullable: true }) input: GetOneCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<CorporationEinResponse> {
    const resp = await this._cqrsBus.execQuery<Result<CorporationEinEntity>>(new GetOneCorporationEinQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._corporationEinMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CORPORATION_EIN'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedCorporationEinResponse, { nullable: true })
  async getPaginatedCorporationEin(
    @Args('input', { nullable: true }) input: GetPaginatedCorporationEinInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedCorporationEinResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<CorporationEinEntity>>>(new GetPaginatedCorporationEinQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._corporationEinMapper.persistent2Dto),
    };
  }



  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async client(@Parent() parent?: CorporationEinResponse): Promise<SolvedEntityResponse> {
    if (parent?.client) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<ClientEntity>>(new GetOneClientQuery({where:{
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
              field: 'conactOficePhone',
              value: client.conactOficePhone
            }
          ]
        }
    }
  }



}

import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateClientInput } from '../dto/inputs/create-client.input';
import { ClientResponse } from '../dto/responses/client.response';
import { GetAllClientInput } from '../dto/inputs/get-all-client.input';
import { DeleteClientInput } from '../dto/inputs/delete-client.input';
import { CreateClientCommand } from '../../cqrs/commands/impl/create-client.command';
import { DeleteClientCommand } from '../../cqrs/commands/impl/delete-client.command';
import { GetAllClientQuery } from '../../cqrs/queries/impl/get-all-client.query';
import { ClientMapper } from '../../mapper/client.mapper';
import { UpdateClientInput } from '../dto/inputs/update-client.input';
import { UpdateClientCommand } from '../../cqrs/commands/impl/update-client.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedClientInput } from '../dto/inputs/get-paginated-client.input';
import { PaginatedClientResponse } from '../dto/responses/paginated-client.response';
import { GetPaginatedClientQuery } from '../../cqrs/queries/impl/get-paginated-client.query';
import { GetOneClientInput } from '../dto/inputs/get-one-client.input';
import { GetOneClientQuery } from '../../cqrs/queries/impl/get-one-client.query';
import { DeleteManyClientInput } from '../dto/inputs/delete-many-client.input';
import { DeleteManyClientCommand } from '../../cqrs/commands/impl/delete-many-client.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ClientEntity } from '../../entities/client.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { TaxesEntity } from 'src/modules/taxes/entities/taxes.entity';
import { GetOneTaxesQuery } from 'src/modules/taxes/cqrs/queries/impl/get-one-taxes.query';

@Resolver(() => ClientResponse)
export class ClientResolver extends BaseResolver {
  constructor(
    private readonly _clientMapper: ClientMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createClient(
    @Args('input') input: CreateClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateClientCommand(
      this._clientMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateClient(
    @Args('input') { update, entityId }: UpdateClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateClientCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteClient(
    @Args('input') { entityId }: DeleteClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteClientCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyClient(
    @Args('input') input: DeleteManyClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyClientCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ClientResponse])
  async getAllClient(
    @Args('input', { nullable: true }) input: GetAllClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ClientResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ClientEntity>>>(new GetAllClientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._clientMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => ClientResponse, { nullable: true })
  async getOneClient(
    @Args('input', { nullable: true }) input: GetOneClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ClientResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ClientEntity>>(new GetOneClientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._clientMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLIENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedClientResponse, { nullable: true })
  async getPaginatedClient(
    @Args('input', { nullable: true }) input: GetPaginatedClientInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedClientResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ClientEntity>>>(new GetPaginatedClientQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._clientMapper.persistent2Dto),
    };
  }






}

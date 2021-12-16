import { Args, Mutation, Query, Resolver,ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateClearinghouseFormInput } from '../dto/inputs/create-clearinghouse-form.input';
import { ClearinghouseFormResponse } from '../dto/responses/clearinghouse-form.response';
import { GetAllClearinghouseFormInput } from '../dto/inputs/get-all-clearinghouse-form.input';
import { DeleteClearinghouseFormInput } from '../dto/inputs/delete-clearinghouse-form.input';
import { CreateClearinghouseFormCommand } from '../../cqrs/commands/impl/create-clearinghouse-form.command';
import { DeleteClearinghouseFormCommand } from '../../cqrs/commands/impl/delete-clearinghouse-form.command';
import { GetAllClearinghouseFormQuery } from '../../cqrs/queries/impl/get-all-clearinghouse-form.query';
import { ClearinghouseFormMapper } from '../../mapper/clearinghouse-form.mapper';
import { UpdateClearinghouseFormInput } from '../dto/inputs/update-clearinghouse-form.input';
import { UpdateClearinghouseFormCommand } from '../../cqrs/commands/impl/update-clearinghouse-form.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedClearinghouseFormInput } from '../dto/inputs/get-paginated-clearinghouse-form.input';
import { PaginatedClearinghouseFormResponse } from '../dto/responses/paginated-clearinghouse-form.response';
import { GetPaginatedClearinghouseFormQuery } from '../../cqrs/queries/impl/get-paginated-clearinghouse-form.query';
import { GetOneClearinghouseFormInput } from '../dto/inputs/get-one-clearinghouse-form.input';
import { GetOneClearinghouseFormQuery } from '../../cqrs/queries/impl/get-one-clearinghouse-form.query';
import { DeleteManyClearinghouseFormInput } from '../dto/inputs/delete-many-clearinghouse-form.input';
import { DeleteManyClearinghouseFormCommand } from '../../cqrs/commands/impl/delete-many-clearinghouse-form.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ClearinghouseFormEntity } from '../../entities/clearinghouse-form.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { GetOneClientQuery } from 'src/modules/client/cqrs/queries/impl/get-one-client.query';


@Resolver(() => ClearinghouseFormResponse)
export class ClearinghouseFormResolver extends BaseResolver {
  constructor(
    private readonly _clearinghouseFormMapper: ClearinghouseFormMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createClearinghouseForm(
    @Args('input') input: CreateClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateClearinghouseFormCommand(
      this._clearinghouseFormMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateClearinghouseForm(
    @Args('input') { update, entityId }: UpdateClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateClearinghouseFormCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteClearinghouseForm(
    @Args('input') { entityId }: DeleteClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteClearinghouseFormCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyClearinghouseForm(
    @Args('input') input: DeleteManyClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyClearinghouseFormCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ClearinghouseFormResponse])
  async getAllClearinghouseForm(
    @Args('input', { nullable: true }) input: GetAllClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ClearinghouseFormResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ClearinghouseFormEntity>>>(new GetAllClearinghouseFormQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._clearinghouseFormMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.GET_ONE})
  @Query(() => ClearinghouseFormResponse, { nullable: true })
  async getOneClearinghouseForm(
    @Args('input', { nullable: true }) input: GetOneClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ClearinghouseFormResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ClearinghouseFormEntity>>(new GetOneClearinghouseFormQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._clearinghouseFormMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['CLEARINGHOUSE_FORM'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedClearinghouseFormResponse, { nullable: true })
  async getPaginatedClearinghouseForm(
    @Args('input', { nullable: true }) input: GetPaginatedClearinghouseFormInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedClearinghouseFormResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ClearinghouseFormEntity>>>(new GetPaginatedClearinghouseFormQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._clearinghouseFormMapper.persistent2Dto),
    };
  }



  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async client(@Parent() parent?: ClearinghouseFormResponse): Promise<SolvedEntityResponse> {
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
              field: 'contactOfficePhone',
              value: client.contactOfficePhone
            }
          ]
        }
    }
  }





}

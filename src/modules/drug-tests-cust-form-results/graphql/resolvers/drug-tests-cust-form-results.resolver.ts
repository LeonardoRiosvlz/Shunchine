import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDrugTestsCustFormResultsInput } from '../dto/inputs/create-drug-tests-cust-form-results.input';
import { DrugTestsCustFormResultsResponse } from '../dto/responses/drug-tests-cust-form-results.response';
import { GetAllDrugTestsCustFormResultsInput } from '../dto/inputs/get-all-drug-tests-cust-form-results.input';
import { DeleteDrugTestsCustFormResultsInput } from '../dto/inputs/delete-drug-tests-cust-form-results.input';
import { CreateDrugTestsCustFormResultsCommand } from '../../cqrs/commands/impl/create-drug-tests-cust-form-results.command';
import { DeleteDrugTestsCustFormResultsCommand } from '../../cqrs/commands/impl/delete-drug-tests-cust-form-results.command';
import { GetAllDrugTestsCustFormResultsQuery } from '../../cqrs/queries/impl/get-all-drug-tests-cust-form-results.query';
import { DrugTestsCustFormResultsMapper } from '../../mapper/drug-tests-cust-form-results.mapper';
import { UpdateDrugTestsCustFormResultsInput } from '../dto/inputs/update-drug-tests-cust-form-results.input';
import { UpdateDrugTestsCustFormResultsCommand } from '../../cqrs/commands/impl/update-drug-tests-cust-form-results.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDrugTestsCustFormResultsInput } from '../dto/inputs/get-paginated-drug-tests-cust-form-results.input';
import { PaginatedDrugTestsCustFormResultsResponse } from '../dto/responses/paginated-drug-tests-cust-form-results.response';
import { GetPaginatedDrugTestsCustFormResultsQuery } from '../../cqrs/queries/impl/get-paginated-drug-tests-cust-form-results.query';
import { GetOneDrugTestsCustFormResultsInput } from '../dto/inputs/get-one-drug-tests-cust-form-results.input';
import { GetOneDrugTestsCustFormResultsQuery } from '../../cqrs/queries/impl/get-one-drug-tests-cust-form-results.query';
import { DeleteManyDrugTestsCustFormResultsInput } from '../dto/inputs/delete-many-drug-tests-cust-form-results.input';
import { DeleteManyDrugTestsCustFormResultsCommand } from '../../cqrs/commands/impl/delete-many-drug-tests-cust-form-results.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DrugTestsCustFormResultsEntity } from '../../entities/drug-tests-cust-form-results.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => DrugTestsCustFormResultsResponse)
export class DrugTestsCustFormResultsResolver extends BaseResolver {
  constructor(
    private readonly _drugTestsCustFormResultsMapper: DrugTestsCustFormResultsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDrugTestsCustFormResults(
    @Args('input') input: CreateDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDrugTestsCustFormResultsCommand(
      this._drugTestsCustFormResultsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDrugTestsCustFormResults(
    @Args('input') { update, entityId }: UpdateDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDrugTestsCustFormResultsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDrugTestsCustFormResults(
    @Args('input') { entityId }: DeleteDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDrugTestsCustFormResultsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDrugTestsCustFormResults(
    @Args('input') input: DeleteManyDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDrugTestsCustFormResultsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DrugTestsCustFormResultsResponse])
  async getAllDrugTestsCustFormResults(
    @Args('input', { nullable: true }) input: GetAllDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DrugTestsCustFormResultsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DrugTestsCustFormResultsEntity>>>(new GetAllDrugTestsCustFormResultsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._drugTestsCustFormResultsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.GET_ONE})
  @Query(() => DrugTestsCustFormResultsResponse, { nullable: true })
  async getOneDrugTestsCustFormResults(
    @Args('input', { nullable: true }) input: GetOneDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DrugTestsCustFormResultsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DrugTestsCustFormResultsEntity>>(new GetOneDrugTestsCustFormResultsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._drugTestsCustFormResultsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRUG_TESTS_CUST_FORM_RESULTS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDrugTestsCustFormResultsResponse, { nullable: true })
  async getPaginatedDrugTestsCustFormResults(
    @Args('input', { nullable: true }) input: GetPaginatedDrugTestsCustFormResultsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDrugTestsCustFormResultsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DrugTestsCustFormResultsEntity>>>(new GetPaginatedDrugTestsCustFormResultsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._drugTestsCustFormResultsMapper.persistent2Dto),
    };
  }


}

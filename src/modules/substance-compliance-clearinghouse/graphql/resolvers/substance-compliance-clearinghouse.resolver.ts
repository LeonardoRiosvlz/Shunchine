import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateSubstanceComplianceClearinghouseInput } from '../dto/inputs/create-substance-compliance-clearinghouse.input';
import { SubstanceComplianceClearinghouseResponse } from '../dto/responses/substance-compliance-clearinghouse.response';
import { GetAllSubstanceComplianceClearinghouseInput } from '../dto/inputs/get-all-substance-compliance-clearinghouse.input';
import { DeleteSubstanceComplianceClearinghouseInput } from '../dto/inputs/delete-substance-compliance-clearinghouse.input';
import { CreateSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/create-substance-compliance-clearinghouse.command';
import { DeleteSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/delete-substance-compliance-clearinghouse.command';
import { GetAllSubstanceComplianceClearinghouseQuery } from '../../cqrs/queries/impl/get-all-substance-compliance-clearinghouse.query';
import { SubstanceComplianceClearinghouseMapper } from '../../mapper/substance-compliance-clearinghouse.mapper';
import { UpdateSubstanceComplianceClearinghouseInput } from '../dto/inputs/update-substance-compliance-clearinghouse.input';
import { UpdateSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/update-substance-compliance-clearinghouse.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedSubstanceComplianceClearinghouseInput } from '../dto/inputs/get-paginated-substance-compliance-clearinghouse.input';
import { PaginatedSubstanceComplianceClearinghouseResponse } from '../dto/responses/paginated-substance-compliance-clearinghouse.response';
import { GetPaginatedSubstanceComplianceClearinghouseQuery } from '../../cqrs/queries/impl/get-paginated-substance-compliance-clearinghouse.query';
import { GetOneSubstanceComplianceClearinghouseInput } from '../dto/inputs/get-one-substance-compliance-clearinghouse.input';
import { GetOneSubstanceComplianceClearinghouseQuery } from '../../cqrs/queries/impl/get-one-substance-compliance-clearinghouse.query';
import { DeleteManySubstanceComplianceClearinghouseInput } from '../dto/inputs/delete-many-substance-compliance-clearinghouse.input';
import { DeleteManySubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/delete-many-substance-compliance-clearinghouse.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { SubstanceComplianceClearinghouseEntity } from '../../entities/substance-compliance-clearinghouse.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => SubstanceComplianceClearinghouseResponse)
export class SubstanceComplianceClearinghouseResolver extends BaseResolver {
  constructor(
    private readonly _substanceComplianceClearinghouseMapper: SubstanceComplianceClearinghouseMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createSubstanceComplianceClearinghouse(
    @Args('input') input: CreateSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateSubstanceComplianceClearinghouseCommand(
      this._substanceComplianceClearinghouseMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateSubstanceComplianceClearinghouse(
    @Args('input') { update, entityId }: UpdateSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateSubstanceComplianceClearinghouseCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteSubstanceComplianceClearinghouse(
    @Args('input') { entityId }: DeleteSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteSubstanceComplianceClearinghouseCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManySubstanceComplianceClearinghouse(
    @Args('input') input: DeleteManySubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManySubstanceComplianceClearinghouseCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[SubstanceComplianceClearinghouseResponse])
  async getAllSubstanceComplianceClearinghouse(
    @Args('input', { nullable: true }) input: GetAllSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<SubstanceComplianceClearinghouseResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<SubstanceComplianceClearinghouseEntity>>>(new GetAllSubstanceComplianceClearinghouseQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._substanceComplianceClearinghouseMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.GET_ONE})
  @Query(() => SubstanceComplianceClearinghouseResponse, { nullable: true })
  async getOneSubstanceComplianceClearinghouse(
    @Args('input', { nullable: true }) input: GetOneSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<SubstanceComplianceClearinghouseResponse> {
    const resp = await this._cqrsBus.execQuery<Result<SubstanceComplianceClearinghouseEntity>>(new GetOneSubstanceComplianceClearinghouseQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._substanceComplianceClearinghouseMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedSubstanceComplianceClearinghouseResponse, { nullable: true })
  async getPaginatedSubstanceComplianceClearinghouse(
    @Args('input', { nullable: true }) input: GetPaginatedSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedSubstanceComplianceClearinghouseResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<SubstanceComplianceClearinghouseEntity>>>(new GetPaginatedSubstanceComplianceClearinghouseQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._substanceComplianceClearinghouseMapper.persistent2Dto),
    };
  }


}

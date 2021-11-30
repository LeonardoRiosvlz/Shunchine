import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/create-files-substance-compliance-clearinghouse.input';
import { FilesSubstanceComplianceClearinghouseResponse } from '../dto/responses/files-substance-compliance-clearinghouse.response';
import { GetAllFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/get-all-files-substance-compliance-clearinghouse.input';
import { DeleteFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/delete-files-substance-compliance-clearinghouse.input';
import { CreateFilesSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/create-files-substance-compliance-clearinghouse.command';
import { DeleteFilesSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/delete-files-substance-compliance-clearinghouse.command';
import { GetAllFilesSubstanceComplianceClearinghouseQuery } from '../../cqrs/queries/impl/get-all-files-substance-compliance-clearinghouse.query';
import { FilesSubstanceComplianceClearinghouseMapper } from '../../mapper/files-substance-compliance-clearinghouse.mapper';
import { UpdateFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/update-files-substance-compliance-clearinghouse.input';
import { UpdateFilesSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/update-files-substance-compliance-clearinghouse.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/get-paginated-files-substance-compliance-clearinghouse.input';
import { PaginatedFilesSubstanceComplianceClearinghouseResponse } from '../dto/responses/paginated-files-substance-compliance-clearinghouse.response';
import { GetPaginatedFilesSubstanceComplianceClearinghouseQuery } from '../../cqrs/queries/impl/get-paginated-files-substance-compliance-clearinghouse.query';
import { GetOneFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/get-one-files-substance-compliance-clearinghouse.input';
import { GetOneFilesSubstanceComplianceClearinghouseQuery } from '../../cqrs/queries/impl/get-one-files-substance-compliance-clearinghouse.query';
import { DeleteManyFilesSubstanceComplianceClearinghouseInput } from '../dto/inputs/delete-many-files-substance-compliance-clearinghouse.input';
import { DeleteManyFilesSubstanceComplianceClearinghouseCommand } from '../../cqrs/commands/impl/delete-many-files-substance-compliance-clearinghouse.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../entities/files-substance-compliance-clearinghouse.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesSubstanceComplianceClearinghouseResponse)
export class FilesSubstanceComplianceClearinghouseResolver extends BaseResolver {
  constructor(
    private readonly _filesSubstanceComplianceClearinghouseMapper: FilesSubstanceComplianceClearinghouseMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesSubstanceComplianceClearinghouse(
    @Args('input') input: CreateFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesSubstanceComplianceClearinghouseCommand(
      this._filesSubstanceComplianceClearinghouseMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesSubstanceComplianceClearinghouse(
    @Args('input') { update, entityId }: UpdateFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesSubstanceComplianceClearinghouseCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesSubstanceComplianceClearinghouse(
    @Args('input') { entityId }: DeleteFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesSubstanceComplianceClearinghouseCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesSubstanceComplianceClearinghouse(
    @Args('input') input: DeleteManyFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesSubstanceComplianceClearinghouseCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesSubstanceComplianceClearinghouseResponse])
  async getAllFilesSubstanceComplianceClearinghouse(
    @Args('input', { nullable: true }) input: GetAllFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesSubstanceComplianceClearinghouseResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesSubstanceComplianceClearinghouseEntity>>>(new GetAllFilesSubstanceComplianceClearinghouseQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesSubstanceComplianceClearinghouseMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesSubstanceComplianceClearinghouseResponse, { nullable: true })
  async getOneFilesSubstanceComplianceClearinghouse(
    @Args('input', { nullable: true }) input: GetOneFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesSubstanceComplianceClearinghouseResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesSubstanceComplianceClearinghouseEntity>>(new GetOneFilesSubstanceComplianceClearinghouseQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesSubstanceComplianceClearinghouseMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_SUBSTANCE_COMPLIANCE_CLEARINGHOUSE'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesSubstanceComplianceClearinghouseResponse, { nullable: true })
  async getPaginatedFilesSubstanceComplianceClearinghouse(
    @Args('input', { nullable: true }) input: GetPaginatedFilesSubstanceComplianceClearinghouseInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesSubstanceComplianceClearinghouseResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesSubstanceComplianceClearinghouseEntity>>>(new GetPaginatedFilesSubstanceComplianceClearinghouseQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesSubstanceComplianceClearinghouseMapper.persistent2Dto),
    };
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesSubstanceComplianceClearinghouseResponse): Promise<CloudFileResponse> {
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

import { Args, Mutation, Query, Resolver, Parent , ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateIftaFuelTaxesInput } from '../dto/inputs/create-ifta-fuel-taxes.input';
import { IftaFuelTaxesResponse } from '../dto/responses/ifta-fuel-taxes.response';
import { GetAllIftaFuelTaxesInput } from '../dto/inputs/get-all-ifta-fuel-taxes.input';
import { DeleteIftaFuelTaxesInput } from '../dto/inputs/delete-ifta-fuel-taxes.input';
import { CreateIftaFuelTaxesCommand } from '../../cqrs/commands/impl/create-ifta-fuel-taxes.command';
import { DeleteIftaFuelTaxesCommand } from '../../cqrs/commands/impl/delete-ifta-fuel-taxes.command';
import { GetAllIftaFuelTaxesQuery } from '../../cqrs/queries/impl/get-all-ifta-fuel-taxes.query';
import { IftaFuelTaxesMapper } from '../../mapper/ifta-fuel-taxes.mapper';
import { UpdateIftaFuelTaxesInput } from '../dto/inputs/update-ifta-fuel-taxes.input';
import { UpdateIftaFuelTaxesCommand } from '../../cqrs/commands/impl/update-ifta-fuel-taxes.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedIftaFuelTaxesInput } from '../dto/inputs/get-paginated-ifta-fuel-taxes.input';
import { PaginatedIftaFuelTaxesResponse } from '../dto/responses/paginated-ifta-fuel-taxes.response';
import { GetPaginatedIftaFuelTaxesQuery } from '../../cqrs/queries/impl/get-paginated-ifta-fuel-taxes.query';
import { GetOneIftaFuelTaxesInput } from '../dto/inputs/get-one-ifta-fuel-taxes.input';
import { GetOneIftaFuelTaxesQuery } from '../../cqrs/queries/impl/get-one-ifta-fuel-taxes.query';
import { DeleteManyIftaFuelTaxesInput } from '../dto/inputs/delete-many-ifta-fuel-taxes.input';
import { DeleteManyIftaFuelTaxesCommand } from '../../cqrs/commands/impl/delete-many-ifta-fuel-taxes.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { IftaFuelTaxesEntity } from '../../entities/ifta-fuel-taxes.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';

import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response'; 
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';

@Resolver(() => IftaFuelTaxesResponse)
export class IftaFuelTaxesResolver extends BaseResolver {
  constructor(
    private readonly _iftaFuelTaxesMapper: IftaFuelTaxesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createIftaFuelTaxes(
    @Args('input') input: CreateIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateIftaFuelTaxesCommand(
      this._iftaFuelTaxesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateIftaFuelTaxes(
    @Args('input') { update, entityId }: UpdateIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateIftaFuelTaxesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteIftaFuelTaxes(
    @Args('input') { entityId }: DeleteIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteIftaFuelTaxesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyIftaFuelTaxes(
    @Args('input') input: DeleteManyIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyIftaFuelTaxesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[IftaFuelTaxesResponse])
  async getAllIftaFuelTaxes(
    @Args('input', { nullable: true }) input: GetAllIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<IftaFuelTaxesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<IftaFuelTaxesEntity>>>(new GetAllIftaFuelTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._iftaFuelTaxesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.GET_ONE})
  @Query(() => IftaFuelTaxesResponse, { nullable: true })
  async getOneIftaFuelTaxes(
    @Args('input', { nullable: true }) input: GetOneIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<IftaFuelTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IftaFuelTaxesEntity>>(new GetOneIftaFuelTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._iftaFuelTaxesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IFTA_FUEL_TAXES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedIftaFuelTaxesResponse, { nullable: true })
  async getPaginatedIftaFuelTaxes(
    @Args('input', { nullable: true }) input: GetPaginatedIftaFuelTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedIftaFuelTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<IftaFuelTaxesEntity>>>(new GetPaginatedIftaFuelTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._iftaFuelTaxesMapper.persistent2Dto),
    };
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async iftaAccountFile(@Parent() parent?: IftaFuelTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.iftaAccountFile) {
      const iftaAccountFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.iftaAccountFile.id },
        },
      }));
      if (iftaAccountFileOrErr.isFailure) {
        return null;
      }
      const file = iftaAccountFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async iftaApplRenewalsChangesFile(@Parent() parent?: IftaFuelTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.iftaApplRenewalsChangesFile) {
      const iftaApplRenewalsChangesFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.iftaApplRenewalsChangesFile.id },
        },
      }));
      if (iftaApplRenewalsChangesFileOrErr.isFailure) {
        return null;
      }
      const file = iftaApplRenewalsChangesFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async fuelTaxesFile(@Parent() parent?: IftaFuelTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.fuelTaxesFile) {
      const fuelTaxesFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.fuelTaxesFile.id },
        },
      }));
      if (fuelTaxesFileOrErr.isFailure) {
        return null;
      }
      const file = fuelTaxesFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async otherIftaRequestFile(@Parent() parent?: IftaFuelTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.otherIftaRequestFile) {
      const otherIftaRequestFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.otherIftaRequestFile.id },
        },
      }));
      if (otherIftaRequestFileOrErr.isFailure) {
        return null;
      }
      const file = otherIftaRequestFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



}

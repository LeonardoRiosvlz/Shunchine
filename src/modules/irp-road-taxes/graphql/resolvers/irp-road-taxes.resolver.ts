import { Args, Mutation, Query, Resolver, Parent,ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateIrpRoadTaxesInput } from '../dto/inputs/create-irp-road-taxes.input';
import { IrpRoadTaxesResponse } from '../dto/responses/irp-road-taxes.response';
import { GetAllIrpRoadTaxesInput } from '../dto/inputs/get-all-irp-road-taxes.input';
import { DeleteIrpRoadTaxesInput } from '../dto/inputs/delete-irp-road-taxes.input';
import { CreateIrpRoadTaxesCommand } from '../../cqrs/commands/impl/create-irp-road-taxes.command';
import { DeleteIrpRoadTaxesCommand } from '../../cqrs/commands/impl/delete-irp-road-taxes.command';
import { GetAllIrpRoadTaxesQuery } from '../../cqrs/queries/impl/get-all-irp-road-taxes.query';
import { IrpRoadTaxesMapper } from '../../mapper/irp-road-taxes.mapper';
import { UpdateIrpRoadTaxesInput } from '../dto/inputs/update-irp-road-taxes.input';
import { UpdateIrpRoadTaxesCommand } from '../../cqrs/commands/impl/update-irp-road-taxes.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedIrpRoadTaxesInput } from '../dto/inputs/get-paginated-irp-road-taxes.input';
import { PaginatedIrpRoadTaxesResponse } from '../dto/responses/paginated-irp-road-taxes.response';
import { GetPaginatedIrpRoadTaxesQuery } from '../../cqrs/queries/impl/get-paginated-irp-road-taxes.query';
import { GetOneIrpRoadTaxesInput } from '../dto/inputs/get-one-irp-road-taxes.input';
import { GetOneIrpRoadTaxesQuery } from '../../cqrs/queries/impl/get-one-irp-road-taxes.query';
import { DeleteManyIrpRoadTaxesInput } from '../dto/inputs/delete-many-irp-road-taxes.input';
import { DeleteManyIrpRoadTaxesCommand } from '../../cqrs/commands/impl/delete-many-irp-road-taxes.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { IrpRoadTaxesEntity } from '../../entities/irp-road-taxes.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';

@Resolver(() => IrpRoadTaxesResponse)
export class IrpRoadTaxesResolver extends BaseResolver {
  constructor(
    private readonly _irpRoadTaxesMapper: IrpRoadTaxesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createIrpRoadTaxes(
    @Args('input') input: CreateIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateIrpRoadTaxesCommand(
      this._irpRoadTaxesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateIrpRoadTaxes(
    @Args('input') { update, entityId }: UpdateIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateIrpRoadTaxesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteIrpRoadTaxes(
    @Args('input') { entityId }: DeleteIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteIrpRoadTaxesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyIrpRoadTaxes(
    @Args('input') input: DeleteManyIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyIrpRoadTaxesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[IrpRoadTaxesResponse])
  async getAllIrpRoadTaxes(
    @Args('input', { nullable: true }) input: GetAllIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<IrpRoadTaxesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<IrpRoadTaxesEntity>>>(new GetAllIrpRoadTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._irpRoadTaxesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.GET_ONE})
  @Query(() => IrpRoadTaxesResponse, { nullable: true })
  async getOneIrpRoadTaxes(
    @Args('input', { nullable: true }) input: GetOneIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<IrpRoadTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IrpRoadTaxesEntity>>(new GetOneIrpRoadTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._irpRoadTaxesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['IRP_ROAD_TAXES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedIrpRoadTaxesResponse, { nullable: true })
  async getPaginatedIrpRoadTaxes(
    @Args('input', { nullable: true }) input: GetPaginatedIrpRoadTaxesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedIrpRoadTaxesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<IrpRoadTaxesEntity>>>(new GetPaginatedIrpRoadTaxesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._irpRoadTaxesMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async irpFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.irpFile) {
      const irpFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.irpFile.id },
        },
      }));
      if (irpFileOrErr.isFailure) {
        return null;
      }
      const file = irpFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async certificateTitleFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.certificateTitleFile) {
      const certificateTitleFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.certificateTitleFile.id },
        },
      }));
      if (certificateTitleFileOrErr.isFailure) {
        return null;
      }
      const file = certificateTitleFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async tagFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.tagFile) {
      const tagFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.tagFile.id },
        },
      }));
      if (tagFileOrErr.isFailure) {
        return null;
      }
      const file = tagFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async roadTaxFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.roadTaxFile) {
      const roadTaxFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.roadTaxFile.id },
        },
      }));
      if (roadTaxFileOrErr.isFailure) {
        return null;
      }
      const file = roadTaxFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async leaseAgreementFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.leaseAgreementFile) {
      const leaseAgreementFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.roadTaxFile.id },
        },
      }));
      if (leaseAgreementFileOrErr.isFailure) {
        return null;
      }
      const file = leaseAgreementFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async irpApplicationsRenewalsFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.irpApplicationsRenewalsFile) {
      const irpApplicationsRenewalsFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.irpApplicationsRenewalsFile.id },
        },
      }));
      if (irpApplicationsRenewalsFileOrErr.isFailure) {
        return null;
      }
      const file = irpApplicationsRenewalsFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async otherIrpRequestFile(@Parent() parent?: IrpRoadTaxesResponse): Promise<CloudFileResponse> {
    if (parent?.otherIrpRequestFile) {
      const irpApplicationsRenewalsFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.otherIrpRequestFile.id },
        },
      }));
      if (irpApplicationsRenewalsFileOrErr.isFailure) {
        return null;
      }
      const file = irpApplicationsRenewalsFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }


}

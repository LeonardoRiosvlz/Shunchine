import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesFinancedEquipmentInput } from '../dto/inputs/create-files-financed-equipment.input';
import { FilesFinancedEquipmentResponse } from '../dto/responses/files-financed-equipment.response';
import { GetAllFilesFinancedEquipmentInput } from '../dto/inputs/get-all-files-financed-equipment.input';
import { DeleteFilesFinancedEquipmentInput } from '../dto/inputs/delete-files-financed-equipment.input';
import { CreateFilesFinancedEquipmentCommand } from '../../cqrs/commands/impl/create-files-financed-equipment.command';
import { DeleteFilesFinancedEquipmentCommand } from '../../cqrs/commands/impl/delete-files-financed-equipment.command';
import { GetAllFilesFinancedEquipmentQuery } from '../../cqrs/queries/impl/get-all-files-financed-equipment.query';
import { FilesFinancedEquipmentMapper } from '../../mapper/files-financed-equipment.mapper';
import { UpdateFilesFinancedEquipmentInput } from '../dto/inputs/update-files-financed-equipment.input';
import { UpdateFilesFinancedEquipmentCommand } from '../../cqrs/commands/impl/update-files-financed-equipment.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesFinancedEquipmentInput } from '../dto/inputs/get-paginated-files-financed-equipment.input';
import { PaginatedFilesFinancedEquipmentResponse } from '../dto/responses/paginated-files-financed-equipment.response';
import { GetPaginatedFilesFinancedEquipmentQuery } from '../../cqrs/queries/impl/get-paginated-files-financed-equipment.query';
import { GetOneFilesFinancedEquipmentInput } from '../dto/inputs/get-one-files-financed-equipment.input';
import { GetOneFilesFinancedEquipmentQuery } from '../../cqrs/queries/impl/get-one-files-financed-equipment.query';
import { DeleteManyFilesFinancedEquipmentInput } from '../dto/inputs/delete-many-files-financed-equipment.input';
import { DeleteManyFilesFinancedEquipmentCommand } from '../../cqrs/commands/impl/delete-many-files-financed-equipment.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesFinancedEquipmentEntity } from '../../entities/files-financed-equipment.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesFinancedEquipmentResponse)
export class FilesFinancedEquipmentResolver extends BaseResolver {
  constructor(
    private readonly _filesFinancedEquipmentMapper: FilesFinancedEquipmentMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesFinancedEquipment(
    @Args('input') input: CreateFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesFinancedEquipmentCommand(
      this._filesFinancedEquipmentMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesFinancedEquipment(
    @Args('input') { update, entityId }: UpdateFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesFinancedEquipmentCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesFinancedEquipment(
    @Args('input') { entityId }: DeleteFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesFinancedEquipmentCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesFinancedEquipment(
    @Args('input') input: DeleteManyFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesFinancedEquipmentCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesFinancedEquipmentResponse])
  async getAllFilesFinancedEquipment(
    @Args('input', { nullable: true }) input: GetAllFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesFinancedEquipmentResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesFinancedEquipmentEntity>>>(new GetAllFilesFinancedEquipmentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesFinancedEquipmentMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesFinancedEquipmentResponse, { nullable: true })
  async getOneFilesFinancedEquipment(
    @Args('input', { nullable: true }) input: GetOneFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesFinancedEquipmentResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesFinancedEquipmentEntity>>(new GetOneFilesFinancedEquipmentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesFinancedEquipmentMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_FINANCED_EQUIPMENT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesFinancedEquipmentResponse, { nullable: true })
  async getPaginatedFilesFinancedEquipment(
    @Args('input', { nullable: true }) input: GetPaginatedFilesFinancedEquipmentInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesFinancedEquipmentResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesFinancedEquipmentEntity>>>(new GetPaginatedFilesFinancedEquipmentQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesFinancedEquipmentMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesFinancedEquipmentResponse): Promise<CloudFileResponse> {
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

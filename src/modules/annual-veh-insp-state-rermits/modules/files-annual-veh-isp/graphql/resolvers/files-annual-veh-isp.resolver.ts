import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateFilesAnnualVehIspInput } from '../dto/inputs/create-files-annual-veh-isp.input';
import { FilesAnnualVehIspResponse } from '../dto/responses/files-annual-veh-isp.response';
import { GetAllFilesAnnualVehIspInput } from '../dto/inputs/get-all-files-annual-veh-isp.input';
import { DeleteFilesAnnualVehIspInput } from '../dto/inputs/delete-files-annual-veh-isp.input';
import { CreateFilesAnnualVehIspCommand } from '../../cqrs/commands/impl/create-files-annual-veh-isp.command';
import { DeleteFilesAnnualVehIspCommand } from '../../cqrs/commands/impl/delete-files-annual-veh-isp.command';
import { GetAllFilesAnnualVehIspQuery } from '../../cqrs/queries/impl/get-all-files-annual-veh-isp.query';
import { FilesAnnualVehIspMapper } from '../../mapper/files-annual-veh-isp.mapper';
import { UpdateFilesAnnualVehIspInput } from '../dto/inputs/update-files-annual-veh-isp.input';
import { UpdateFilesAnnualVehIspCommand } from '../../cqrs/commands/impl/update-files-annual-veh-isp.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedFilesAnnualVehIspInput } from '../dto/inputs/get-paginated-files-annual-veh-isp.input';
import { PaginatedFilesAnnualVehIspResponse } from '../dto/responses/paginated-files-annual-veh-isp.response';
import { GetPaginatedFilesAnnualVehIspQuery } from '../../cqrs/queries/impl/get-paginated-files-annual-veh-isp.query';
import { GetOneFilesAnnualVehIspInput } from '../dto/inputs/get-one-files-annual-veh-isp.input';
import { GetOneFilesAnnualVehIspQuery } from '../../cqrs/queries/impl/get-one-files-annual-veh-isp.query';
import { DeleteManyFilesAnnualVehIspInput } from '../dto/inputs/delete-many-files-annual-veh-isp.input';
import { DeleteManyFilesAnnualVehIspCommand } from '../../cqrs/commands/impl/delete-many-files-annual-veh-isp.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { FilesAnnualVehIspEntity } from '../../entities/files-annual-veh-isp.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => FilesAnnualVehIspResponse)
export class FilesAnnualVehIspResolver extends BaseResolver {
  constructor(
    private readonly _filesAnnualVehIspMapper: FilesAnnualVehIspMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createFilesAnnualVehIsp(
    @Args('input') input: CreateFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateFilesAnnualVehIspCommand(
      this._filesAnnualVehIspMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateFilesAnnualVehIsp(
    @Args('input') { update, entityId }: UpdateFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateFilesAnnualVehIspCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteFilesAnnualVehIsp(
    @Args('input') { entityId }: DeleteFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteFilesAnnualVehIspCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyFilesAnnualVehIsp(
    @Args('input') input: DeleteManyFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyFilesAnnualVehIspCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[FilesAnnualVehIspResponse])
  async getAllFilesAnnualVehIsp(
    @Args('input', { nullable: true }) input: GetAllFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<FilesAnnualVehIspResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<FilesAnnualVehIspEntity>>>(new GetAllFilesAnnualVehIspQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._filesAnnualVehIspMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.GET_ONE})
  @Query(() => FilesAnnualVehIspResponse, { nullable: true })
  async getOneFilesAnnualVehIsp(
    @Args('input', { nullable: true }) input: GetOneFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<FilesAnnualVehIspResponse> {
    const resp = await this._cqrsBus.execQuery<Result<FilesAnnualVehIspEntity>>(new GetOneFilesAnnualVehIspQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._filesAnnualVehIspMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['FILES_ANNUAL_VEH_ISP'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedFilesAnnualVehIspResponse, { nullable: true })
  async getPaginatedFilesAnnualVehIsp(
    @Args('input', { nullable: true }) input: GetPaginatedFilesAnnualVehIspInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedFilesAnnualVehIspResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<FilesAnnualVehIspEntity>>>(new GetPaginatedFilesAnnualVehIspQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._filesAnnualVehIspMapper.persistent2Dto),
    };
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async file(@Parent() parent?: FilesAnnualVehIspResponse): Promise<CloudFileResponse> {
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

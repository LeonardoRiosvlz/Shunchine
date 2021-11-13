import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDotInfoInput } from '../dto/inputs/create-dot-info.input';
import { DotInfoResponse } from '../dto/responses/dot-info.response';
import { GetAllDotInfoInput } from '../dto/inputs/get-all-dot-info.input';
import { DeleteDotInfoInput } from '../dto/inputs/delete-dot-info.input';
import { CreateDotInfoCommand } from '../../cqrs/commands/impl/create-dot-info.command';
import { DeleteDotInfoCommand } from '../../cqrs/commands/impl/delete-dot-info.command';
import { GetAllDotInfoQuery } from '../../cqrs/queries/impl/get-all-dot-info.query';
import { DotInfoMapper } from '../../mapper/dot-info.mapper';
import { UpdateDotInfoInput } from '../dto/inputs/update-dot-info.input';
import { UpdateDotInfoCommand } from '../../cqrs/commands/impl/update-dot-info.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDotInfoInput } from '../dto/inputs/get-paginated-dot-info.input';
import { PaginatedDotInfoResponse } from '../dto/responses/paginated-dot-info.response';
import { GetPaginatedDotInfoQuery } from '../../cqrs/queries/impl/get-paginated-dot-info.query';
import { GetOneDotInfoInput } from '../dto/inputs/get-one-dot-info.input';
import { GetOneDotInfoQuery } from '../../cqrs/queries/impl/get-one-dot-info.query';
import { DeleteManyDotInfoInput } from '../dto/inputs/delete-many-dot-info.input';
import { DeleteManyDotInfoCommand } from '../../cqrs/commands/impl/delete-many-dot-info.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DotInfoEntity } from '../../entities/dot-info.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response'; 
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => DotInfoResponse)
export class DotInfoResolver extends BaseResolver {
  constructor(
    private readonly _dotInfoMapper: DotInfoMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDotInfo(
    @Args('input') input: CreateDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDotInfoCommand(
      this._dotInfoMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDotInfo(
    @Args('input') { update, entityId }: UpdateDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDotInfoCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDotInfo(
    @Args('input') { entityId }: DeleteDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDotInfoCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDotInfo(
    @Args('input') input: DeleteManyDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDotInfoCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DotInfoResponse])
  async getAllDotInfo(
    @Args('input', { nullable: true }) input: GetAllDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DotInfoResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DotInfoEntity>>>(new GetAllDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._dotInfoMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.GET_ONE})
  @Query(() => DotInfoResponse, { nullable: true })
  async getOneDotInfo(
    @Args('input', { nullable: true }) input: GetOneDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DotInfoResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DotInfoEntity>>(new GetOneDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._dotInfoMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DOT_INFO'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDotInfoResponse, { nullable: true })
  async getPaginatedDotInfo(
    @Args('input', { nullable: true }) input: GetPaginatedDotInfoInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDotInfoResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DotInfoEntity>>>(new GetPaginatedDotInfoQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._dotInfoMapper.persistent2Dto),
    };
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async dotFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.dotFile) {
      const dotFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.dotFile.id },
        },
      }));
      if (dotFileOrErr.isFailure) {
        return null;
      }
      const file = dotFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async mcFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.mcFile) {
      const mcFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.mcFile.id },
        },
      }));
      if (mcFileOrErr.isFailure) {
        return null;
      }
      const file = mcFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async taxIdFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.taxIdFile) {
      const taxIdFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.taxIdFile.id },
        },
      }));
      if (taxIdFileOrErr.isFailure) {
        return null;
      }
      const file = taxIdFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async dotPinFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.dotPinFile) {
      const dotPinFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.dotPinFile.id },
        },
      }));
      if (dotPinFileOrErr.isFailure) {
        return null;
      }
      const file = dotPinFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }





  @ResolveField(() => CloudFileResponse, { nullable: true })
  async mcPinFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.mcPinFile) {
      const mcPinFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.mcPinFile.id },
        },
      }));
      if (mcPinFileOrErr.isFailure) {
        return null;
      }
      const file = mcPinFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async scacFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.scacFile) {
      const scacFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.scacFile.id },
        },
      }));
      if (scacFileOrErr.isFailure) {
        return null;
      }
      const file = scacFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async ucrFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.ucrFile) {
      const ucrFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.ucrFile.id },
        },
      }));
      if (ucrFileOrErr.isFailure) {
        return null;
      }
      const file = ucrFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async bocThreeFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.bocThreeFile) {
      const bocThreeFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.bocThreeFile.id },
        },
      }));
      if (bocThreeFileOrErr.isFailure) {
        return null;
      }
      const file = bocThreeFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async docRoadInspectionFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.docRoadInspectionFile) {
      const docRoadInspectionFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.docRoadInspectionFile.id },
        },
      }));
      if (docRoadInspectionFileOrErr.isFailure) {
        return null;
      }
      const file = docRoadInspectionFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async docAuditsFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.docAuditsFile) {
      const docAuditsFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.docAuditsFile.id },
        },
      }));
      if (docAuditsFileOrErr.isFailure) {
        return null;
      }
      const file = docAuditsFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async otherDotDocumentFile(@Parent() parent?: DotInfoResponse): Promise<CloudFileResponse> {
    if (parent?.otherDotDocumentFile) {
      const otherDotDocumentFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.otherDotDocumentFile.id },
        },
      }));
      if (otherDotDocumentFileOrErr.isFailure) {
        return null;
      }
      const file = otherDotDocumentFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }


}

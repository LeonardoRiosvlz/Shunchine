import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateDriverFilesInput } from '../dto/inputs/create-driver-files.input';
import { DriverFilesResponse } from '../dto/responses/driver-files.response';
import { GetAllDriverFilesInput } from '../dto/inputs/get-all-driver-files.input';
import { DeleteDriverFilesInput } from '../dto/inputs/delete-driver-files.input';
import { CreateDriverFilesCommand } from '../../cqrs/commands/impl/create-driver-files.command';
import { DeleteDriverFilesCommand } from '../../cqrs/commands/impl/delete-driver-files.command';
import { GetAllDriverFilesQuery } from '../../cqrs/queries/impl/get-all-driver-files.query';
import { DriverFilesMapper } from '../../mapper/driver-files.mapper';
import { UpdateDriverFilesInput } from '../dto/inputs/update-driver-files.input';
import { UpdateDriverFilesCommand } from '../../cqrs/commands/impl/update-driver-files.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedDriverFilesInput } from '../dto/inputs/get-paginated-driver-files.input';
import { PaginatedDriverFilesResponse } from '../dto/responses/paginated-driver-files.response';
import { GetPaginatedDriverFilesQuery } from '../../cqrs/queries/impl/get-paginated-driver-files.query';
import { GetOneDriverFilesInput } from '../dto/inputs/get-one-driver-files.input';
import { GetOneDriverFilesQuery } from '../../cqrs/queries/impl/get-one-driver-files.query';
import { DeleteManyDriverFilesInput } from '../dto/inputs/delete-many-driver-files.input';
import { DeleteManyDriverFilesCommand } from '../../cqrs/commands/impl/delete-many-driver-files.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { DriverFilesEntity } from '../../entities/driver-files.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response'; 
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => DriverFilesResponse)
export class DriverFilesResolver extends BaseResolver {
  constructor(
    private readonly _driverFilesMapper: DriverFilesMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createDriverFiles(
    @Args('input') input: CreateDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateDriverFilesCommand(
      this._driverFilesMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateDriverFiles(
    @Args('input') { update, entityId }: UpdateDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateDriverFilesCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteDriverFiles(
    @Args('input') { entityId }: DeleteDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteDriverFilesCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyDriverFiles(
    @Args('input') input: DeleteManyDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyDriverFilesCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[DriverFilesResponse])
  async getAllDriverFiles(
    @Args('input', { nullable: true }) input: GetAllDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<DriverFilesResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<DriverFilesEntity>>>(new GetAllDriverFilesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._driverFilesMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.GET_ONE})
  @Query(() => DriverFilesResponse, { nullable: true })
  async getOneDriverFiles(
    @Args('input', { nullable: true }) input: GetOneDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<DriverFilesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<DriverFilesEntity>>(new GetOneDriverFilesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._driverFilesMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['DRIVER_FILES'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedDriverFilesResponse, { nullable: true })
  async getPaginatedDriverFiles(
    @Args('input', { nullable: true }) input: GetPaginatedDriverFilesInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedDriverFilesResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<DriverFilesEntity>>>(new GetPaginatedDriverFilesQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._driverFilesMapper.persistent2Dto),
    };
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async driveLicenseFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.driveLicenseFile) {
      const driveLicenseFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.driveLicenseFile.id },
        },
      }));
      if (driveLicenseFileOrErr.isFailure) {
        return null;
      }
      const file = driveLicenseFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async medicalCardFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.medicalCardFile) {
      const medicalCardFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.medicalCardFile.id },
        },
      }));
      if (medicalCardFileOrErr.isFailure) {
        return null;
      }
      const file = medicalCardFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async mvrFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.mvrFile) {
      const mvrFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.mvrFile.id },
        },
      }));
      if (mvrFileOrErr.isFailure) {
        return null;
      }
      const file = mvrFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async socialSecurityFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.mvrFile) {
      const socialSecurityFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.socialSecurityFile.id },
        },
      }));
      if (socialSecurityFileOrErr.isFailure) {
        return null;
      }
      const file = socialSecurityFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async driverFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.driverFile) {
      const driverFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.driverFile.id },
        },
      }));
      if (driverFileOrErr.isFailure) {
        return null;
      }
      const file = driverFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async driverSignedContractFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.driverSignedContractFile) {
      const driverSignedContractFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.driverSignedContractFile.id },
        },
      }));
      if (driverSignedContractFileOrErr.isFailure) {
        return null;
      }
      const file = driverSignedContractFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async inquiryToPreviousEmployerFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.inquiryToPreviousEmployerFile) {
      const inquiryToPreviousEmployerFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.inquiryToPreviousEmployerFile.id },
        },
      }));
      if (inquiryToPreviousEmployerFileOrErr.isFailure) {
        return null;
      }
      const file = inquiryToPreviousEmployerFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async drugsTestFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.drugsTestFile) {
      const drugsTestFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.drugsTestFile.id },
        },
      }));
      if (drugsTestFileOrErr.isFailure) {
        return null;
      }
      const file = drugsTestFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



  @ResolveField(() => CloudFileResponse, { nullable: true })
  async clearingHouseFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.clearingHouseFile) {
      const clearingHouseFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.clearingHouseFile.id },
        },
      }));
      if (clearingHouseFileOrErr.isFailure) {
        return null;
      }
      const file = clearingHouseFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async readInspectionsNoaFile(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.readInspectionsNoaFile) {
      const readInspectionsNoaFileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.readInspectionsNoaFile.id },
        },
      }));
      if (readInspectionsNoaFileOrErr.isFailure) {
        return null;
      }
      const file = readInspectionsNoaFileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }




  @ResolveField(() => CloudFileResponse, { nullable: true })
  async otherDocuments(@Parent() parent?: DriverFilesResponse): Promise<CloudFileResponse> {
    if (parent?.otherDocuments) {
      const otherDocumentsOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.readInspectionsNoaFile.id },
        },
      }));
      if (otherDocumentsOrErr.isFailure) {
        return null;
      }
      const file = otherDocumentsOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }



}

import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';


@ObjectType()
export class ClientResponse{
  @Field(() => ID) id: string;
  @Field({nullable: true}) clientSince?: string;
  @Field({nullable: true}) companyName?: string;
  @Field({nullable: true}) customerName?: string;
  @Field({nullable: true}) tax?: string;
  @Field({nullable: true}) dot?: string;
  @Field({nullable: true}) mc?: string;
  @Field({nullable: true}) ofTrucks?: string;
  @Field({nullable: true}) street?: string;
  @Field({nullable: true}) city?: string;
  @Field({nullable: true}) stateProvince?: string;
  @Field({nullable: true}) zipPostalCode?: string;
  @Field({nullable: true}) contactEmail?: string;
  @Field({nullable: true}) contactOfficePhone?: string;
  @Field({nullable: true}) mobilePhone?: string;
  @Field({nullable: true}) notes?: string;
  @Field(() => CloudFileResponse, { nullable: true }) photoFile?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

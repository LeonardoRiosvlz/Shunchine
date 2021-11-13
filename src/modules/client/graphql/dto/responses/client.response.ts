import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class ClientResponse{
  @Field(() => ID) id: string;
  @Field({nullable: true}) clientSince?: string;
  @Field({nullable: true}) companyName?: string;
  @Field({nullable: true}) customerName?: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) tax: SolvedEntityResponse;
  @Field({nullable: true}) mc?: string;
  @Field({nullable: true}) ofTrucks?: string;
  @Field({nullable: true}) street?: string;
  @Field({nullable: true}) city?: string;
  @Field({nullable: true}) stateProvince?: string;
  @Field({nullable: true}) zipPostalCode?: string;
  @Field({nullable: true}) contacEmail?: string;
  @Field({nullable: true}) conactOficePhone?: string;
  @Field({nullable: true}) mobilePhone?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

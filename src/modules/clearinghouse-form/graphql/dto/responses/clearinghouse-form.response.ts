import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class ClearinghouseFormResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, {nullable: true}) client: SolvedEntityResponse;
  @Field(() => String, {nullable: true} )  driverName?: string;
  @Field(() => String, {nullable: true} )  driverDob?: string;
  @Field(() => String, {nullable: true} )  driversLicense?: string;
  @Field(() => String, {nullable: true} )  dot?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
 
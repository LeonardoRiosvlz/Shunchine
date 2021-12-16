import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class RoadTaxesFormResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, {nullable: true}) client: SolvedEntityResponse;
  @Field(() => String, {nullable: true} )  taxId?: string;
  @Field(() => String, {nullable: true} )  vehicleTitleOwnerName?: string;
  @Field(() => String, {nullable: true} )  address?: string;
  @Field(() => String, {nullable: true} )  unit?: string;
  @Field(() => String, {nullable: true} )  vin?: string;
  @Field(() => String, {nullable: true} )  unitYear?: string;
  @Field(() => String, {nullable: true} )  monthFirstUsed?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

import { Field, Float, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class YardRentalResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => String, {nullable: true})  truck?: string;
  @Field(() => String, {nullable: true})  truckColor?: string;
  @Field(() => String, {nullable: true})  tag?: string;
  @Field(() => Date,{nullable: true} )  rentalDate?: Date;
  @Field(() => Float, {nullable: true})  rentalAmount?: number;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

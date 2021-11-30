import { Field, Float, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';


@ObjectType()
export class TrailerRentalResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => String, )  unit: string;
  @Field(() => String, )  vin: string;
  @Field(() => String, )  tag: string;
  @Field(() => String, )  year: string;
  @Field(() => String, )  make: string;
  @Field(() => String, )  model: string;
  @Field(() => Date, )  rentalDate: Date;
  @Field(() => Float, )  rentalAmount: number;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

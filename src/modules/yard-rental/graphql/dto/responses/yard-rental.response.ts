import { Field, Float, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

@ObjectType()
export class YardRentalResponse{
  @Field(() => ID) id: string;
  @Field(() => String, )  truck: string;
  @Field(() => String, )  truckColor: string;
  @Field(() => String, )  tag: string;
  @Field(() => Date, )  rentalDate: Date;
  @Field(() => Float, )  rentalAmount: number;
  @Field(() => CloudFileResponse, { nullable: true }) file?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

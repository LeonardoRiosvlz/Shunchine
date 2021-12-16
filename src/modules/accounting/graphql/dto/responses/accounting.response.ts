import { Field, Float, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class AccountingResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, {nullable: true}) client?: SolvedEntityResponse;
  @Field(() => Date, )  date: Date;
  @Field(() => Float, )  paymentAmount: number;
  @Field(() => String, )  achDate: string;
  @Field(() => CloudFileResponse, { nullable: true }) file?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

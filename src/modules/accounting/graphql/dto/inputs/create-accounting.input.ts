import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateAccountingInput {
  @Field(() => ID, {nullable: true}) client?: string;
  @Field(() => Date, )  date: Date;
  @Field(() => Float, )  paymentAmount: number;
  @Field(() => String, )  achDate: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
 
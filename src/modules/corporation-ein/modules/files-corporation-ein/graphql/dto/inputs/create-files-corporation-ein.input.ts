import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesCorporationEinInput {
  @Field(() => ID, {nullable: true} )  corporationEin?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}

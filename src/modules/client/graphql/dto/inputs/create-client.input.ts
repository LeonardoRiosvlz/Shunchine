import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field(() => String, {nullable: true} ) clientSince?: string;
  @Field(() => String, {nullable: true} ) companyName?: string;
  @Field(() => String, {nullable: true} ) customerName?: string;
  @Field(() => ID, {nullable: true}) tax: string;
  @Field(() => String, {nullable: true} ) mc?: string;
  @Field(() => String, {nullable: true} ) ofTrucks?: string;
  @Field(() => String, {nullable: true} ) street?: string;
  @Field(() => String, {nullable: true} ) city?: string;
  @Field(() => String, {nullable: true} ) stateProvince?: string;
  @Field(() => String, {nullable: true} ) zipPostalCode?: string;
  @Field(() => String, {nullable: true} ) contacEmail?: string;
  @Field(() => String, {nullable: true} ) conactOficePhone?: string;
  @Field(() => String, {nullable: true} ) mobilePhone?: string;
}

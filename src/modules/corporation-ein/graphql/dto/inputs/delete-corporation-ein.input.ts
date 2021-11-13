import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteCorporationEinInput {
  @Field(() => ID, )  entityId: string;
}

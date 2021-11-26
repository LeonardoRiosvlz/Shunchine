import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesCorporationEinInput {
  @Field(() => ID, )  entityId: string;
}

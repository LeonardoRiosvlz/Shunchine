import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesTrailerRentalInput {
  @Field(() => ID, )  entityId: string;
}

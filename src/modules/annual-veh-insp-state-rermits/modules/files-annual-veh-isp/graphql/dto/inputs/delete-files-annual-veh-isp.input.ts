import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesAnnualVehIspInput {
  @Field(() => ID, )  entityId: string;
}

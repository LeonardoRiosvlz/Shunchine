import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesIftaFuelTaxesInput {
  @Field(() => ID, )  entityId: string;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { DocumentType } from 'src/modules/corporation-ein/entities/corporation-ein.entity';

@InputType()
export class CreateCorporationEinInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => Date )  expiration: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
}

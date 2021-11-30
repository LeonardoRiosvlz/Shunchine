import { Field, InputType, ID } from '@nestjs/graphql';
import { DocumentType } from 'src/modules/corporation-ein/entities/corporation-ein.entity';

@InputType()
export class CreateCorporationEinInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => Date, {nullable: true} )  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
}

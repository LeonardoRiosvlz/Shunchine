import { Field, InputType, ID } from '@nestjs/graphql';
import { DotInfoDocumentType } from 'src/modules/dot-info/entities/dot-info.entity';

@InputType()
export class CreateDotInfoInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => DotInfoDocumentType )  documentType: DotInfoDocumentType;
  @Field(() => Date , {nullable: true})  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}

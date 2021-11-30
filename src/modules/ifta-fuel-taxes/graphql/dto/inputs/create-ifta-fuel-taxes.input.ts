import { Field, InputType, ID } from '@nestjs/graphql';
import { IftaDocumentType } from 'src/modules/ifta-fuel-taxes/entities/ifta-fuel-taxes.entity';


@InputType()
export class CreateIftaFuelTaxesInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => IftaDocumentType, )  documentType: IftaDocumentType;
  @Field(() => Date , {nullable: true})  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}

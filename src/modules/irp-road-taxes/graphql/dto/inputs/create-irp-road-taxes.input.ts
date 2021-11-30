import { Field, InputType, ID } from '@nestjs/graphql';
import { IrpRoadTaxesType } from 'src/modules/irp-road-taxes/entities/irp-road-taxes.entity';

@InputType()
export class CreateIrpRoadTaxesInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => IrpRoadTaxesType, )  documentType: IrpRoadTaxesType;
  @Field(() => Date , {nullable: true})  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}

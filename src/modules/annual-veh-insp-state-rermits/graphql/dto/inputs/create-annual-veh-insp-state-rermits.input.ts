import { Field, InputType, ID } from '@nestjs/graphql';
import { AnnualVehInspDocumentType } from 'src/modules/annual-veh-insp-state-rermits/entities/annual-veh-insp-state-rermits.entity';

@InputType()
export class CreateAnnualVehInspStateRermitsInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => AnnualVehInspDocumentType, )  documentType: AnnualVehInspDocumentType;
  @Field(() => Date, {nullable: true} )  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}

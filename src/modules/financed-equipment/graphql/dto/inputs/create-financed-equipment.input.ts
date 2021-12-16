import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFinancedEquipmentInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => String,{nullable: true}  )  saleAmount?: string;
  @Field(() => Date, {nullable: true} )  saleDate?: Date;
  @Field(() => String,{nullable: true}  )  monthlyPayment?: string;
  @Field(() => Date, {nullable: true} )  lastPaymentDate?: Date;
  @Field(() => String, {nullable: true} )  truckVin?: string;
}

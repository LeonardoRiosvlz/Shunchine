import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFinancedEquipmentInput {
  @Field(() => String, )  saleAmount: string;
  @Field(() => String, )  saleDate: string;
  @Field(() => String, )  monthlyPayment: string;
  @Field(() => String, )  lastPaymentDate: string;
  @Field(() => ID, { nullable: true }) financeAgreementDocuments?: string;
  @Field(() => String, )  repairsCostReceiptsText: string;
  @Field(() => ID, { nullable: true }) repairsCostReceiptsFile?: string;
  @Field(() => String, {nullable: true} )  truckVin: string;
  @Field(() => ID, { nullable: true }) payOffList?: string;
}

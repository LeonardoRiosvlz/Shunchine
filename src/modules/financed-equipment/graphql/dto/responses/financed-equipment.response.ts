import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

@ObjectType()
export class FinancedEquipmentResponse{
  @Field(() => ID) id: string;
  @Field(() => String, )  saleAmount: string;
  @Field(() => String, )  saleDate: string;
  @Field(() => String, )  monthlyPayment: string;
  @Field(() => String, )  lastPaymentDate: string;
  @Field(() => CloudFileResponse, { nullable: true }) financeAgreementDocuments?: CloudFileResponse;
  @Field(() => String, )  repairsCostReceiptsText: string;
  @Field(() => CloudFileResponse, { nullable: true }) repairsCostReceiptsFile?: CloudFileResponse;
  @Field(() => String, {nullable: true} )  truckVin: string;
  @Field(() => CloudFileResponse, { nullable: true }) payOffList?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

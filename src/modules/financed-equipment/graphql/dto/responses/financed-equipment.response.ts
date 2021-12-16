import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class FinancedEquipmentResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => String,{nullable: true}  )  saleAmount?: string;
  @Field(() => Date, {nullable: true} )  saleDate?: Date;
  @Field(() => String,{nullable: true}  )  monthlyPayment?: string;
  @Field(() => Date, {nullable: true} )  lastPaymentDate?: Date;
  @Field(() => String, {nullable: true} )  truckVin?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

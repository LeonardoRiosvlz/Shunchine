import { Field, ID,  ObjectType,registerEnumType } from '@nestjs/graphql';
import { IrpRoadTaxesType } from 'src/modules/irp-road-taxes/entities/irp-road-taxes.entity';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(IrpRoadTaxesType, { name: 'IrpRoadTaxesType' });

@ObjectType()
export class IrpRoadTaxesResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => IrpRoadTaxesType, )  documentType: IrpRoadTaxesType;
  @Field(() => Date )  expiration: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

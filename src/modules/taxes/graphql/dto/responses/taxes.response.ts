import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';


@ObjectType()
export class TaxesResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field() tax: number;
  @Field() isActive?: boolean;
  @Field({nullable: true}) description?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}

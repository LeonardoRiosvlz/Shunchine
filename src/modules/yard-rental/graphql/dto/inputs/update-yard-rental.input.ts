import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateYardRentalInput } from './create-yard-rental.input';


@InputType()
export class PartialYardRentalInput extends PartialType(CreateYardRentalInput) {}

@InputType()
export class UpdateYardRentalInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialYardRentalInput)  update: PartialYardRentalInput;

}

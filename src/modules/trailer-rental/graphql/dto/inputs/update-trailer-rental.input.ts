import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateTrailerRentalInput } from './create-trailer-rental.input';


@InputType()
export class PartialTrailerRentalInput extends PartialType(CreateTrailerRentalInput) {}

@InputType()
export class UpdateTrailerRentalInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialTrailerRentalInput)  update: PartialTrailerRentalInput;

}

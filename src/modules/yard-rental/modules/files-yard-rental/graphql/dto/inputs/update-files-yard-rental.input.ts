import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesYardRentalInput } from './create-files-yard-rental.input';


@InputType()
export class PartialFilesYardRentalInput extends PartialType(CreateFilesYardRentalInput) {}

@InputType()
export class UpdateFilesYardRentalInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesYardRentalInput)  update: PartialFilesYardRentalInput;

}

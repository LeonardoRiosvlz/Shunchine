import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesTrailerRentalInput } from './create-files-trailer-rental.input';


@InputType()
export class PartialFilesTrailerRentalInput extends PartialType(CreateFilesTrailerRentalInput) {}

@InputType()
export class UpdateFilesTrailerRentalInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesTrailerRentalInput)  update: PartialFilesTrailerRentalInput;

}

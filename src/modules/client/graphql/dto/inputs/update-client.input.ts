import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateClientInput } from './create-client.input';


@InputType()
export class PartialClientInput extends PartialType(CreateClientInput) {}

@InputType()
export class UpdateClientInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialClientInput)  update: PartialClientInput;

}

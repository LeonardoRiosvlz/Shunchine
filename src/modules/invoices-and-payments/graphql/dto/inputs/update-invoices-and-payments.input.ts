import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateInvoicesAndPaymentsInput } from './create-invoices-and-payments.input';


@InputType()
export class PartialInvoicesAndPaymentsInput extends PartialType(CreateInvoicesAndPaymentsInput) {}

@InputType()
export class UpdateInvoicesAndPaymentsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialInvoicesAndPaymentsInput)  update: PartialInvoicesAndPaymentsInput;

}

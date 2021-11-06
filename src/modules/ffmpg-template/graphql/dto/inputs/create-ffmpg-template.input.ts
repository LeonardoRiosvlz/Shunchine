import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFfmpgTemplateInput {
  @Field(() => String,) name: string;
  @Field(() => [ID]) ffmpgOpts: Array<string>;
  @Field(() => String, { nullable: true }) description?: string;
}

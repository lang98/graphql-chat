import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Chat {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  from: string;

  @Field((type) => String)
  message: string;
}

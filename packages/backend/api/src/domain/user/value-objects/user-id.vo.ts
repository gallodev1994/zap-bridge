import { UUID } from "@/shared/UUID";
import { InvalidUserIdError } from "../errors/InvalidUserIdError";

export class UserId extends UUID {
   constructor(public readonly value: string) {
      super(value);
   }

   static create(value: string) {
      if (!value) {
         throw new InvalidUserIdError();
      }

      return new UserId(value);
   }
}



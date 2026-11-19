import { UUID } from "@/shared/UUID";
import { InvalidUserIdError } from "../errors/invalid-user-id.error";

export class UserId extends UUID {
   private constructor(value: string) {
      super(value);
   }

   static create(value: string): UserId {
      try {
         return new UserId(value);
      } catch (e) {
         throw new InvalidUserIdError({ cause: e });
      }
   }
}



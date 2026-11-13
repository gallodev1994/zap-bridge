import { UUID } from "@/shared/UUID";
import { InvalidUserIdError } from "../errors/InvalidUserIdError";

export class UserId extends UUID {
   constructor(public readonly value: string) {
      super('Invalid UserID.');
   }

}



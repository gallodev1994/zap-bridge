import { DomainError } from "./domain.error";

export class EmptyError extends DomainError {
   constructor(entity: string) {
      super(`The entity ${entity} cannot have empty mandatory fields.`);
   }
}
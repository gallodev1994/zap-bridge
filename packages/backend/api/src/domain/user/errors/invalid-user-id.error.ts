import { DomainError } from "./domain.error";

export class InvalidUserIdError extends DomainError {
   constructor() {
      super('Invalid userId.');
   }
}
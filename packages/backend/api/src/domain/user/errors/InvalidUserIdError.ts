import { DomainError } from "./DomainError";

export class InvalidUserIdError extends DomainError {
   constructor() {
      super('Invalid userId.');
   }
}
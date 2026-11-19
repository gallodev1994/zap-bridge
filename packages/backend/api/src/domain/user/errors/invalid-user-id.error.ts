import { DomainError } from "./domain.error";

export class InvalidUserIdError extends DomainError {
   constructor(options?: ErrorOptions) {
      super('Invalid userId.', options);
   }
}
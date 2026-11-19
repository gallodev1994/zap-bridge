import { DomainError } from "./domain.error";

export class NameGreaterCharactersError extends DomainError {
   constructor() {
      super('Name must have at most 50 characters.');
   }
}
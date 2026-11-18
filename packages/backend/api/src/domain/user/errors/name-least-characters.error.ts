import { DomainError } from "./domain.error";

export class NameLeastCharactersError extends DomainError {
   constructor() {
      super('Name must have at least 3 characters.');
   }
}
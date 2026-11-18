import { DomainError } from "./domain.error";

export class NameWithInvalidCharactersError extends DomainError {
   constructor() {
      super('Name contains invalid characters.');
   }
}
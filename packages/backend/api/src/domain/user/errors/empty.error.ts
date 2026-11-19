import { DomainError } from "./domain.error";

export class EmptyError extends DomainError {
   constructor(className: string) {
      super(`The class ${className} cannot have empty mandatory fields.`);
   }
}
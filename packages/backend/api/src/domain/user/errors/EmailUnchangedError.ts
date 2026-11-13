import { DomainError } from "./DomainError";

export class EmailUnchangedError extends DomainError {
   constructor() {
      super('Email unchanged.');
   }
}
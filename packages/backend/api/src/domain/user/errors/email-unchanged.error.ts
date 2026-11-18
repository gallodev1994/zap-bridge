import { DomainError } from "./domain.error";

export class EmailUnchangedError extends DomainError {
   constructor() {
      super('Email unchanged.');
   }
}
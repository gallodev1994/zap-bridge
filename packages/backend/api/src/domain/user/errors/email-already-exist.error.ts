import { DomainError } from "./domain.error";

export class EmailAlreadyExistsError extends DomainError {
   constructor() {
      super('Email already exists.');
   }
}
import { DomainError } from "@/domain/user/errors/domain.error";

export class InvalidUUIDError extends DomainError {
   constructor() {
      super('Invalid UUID.');
   }
}
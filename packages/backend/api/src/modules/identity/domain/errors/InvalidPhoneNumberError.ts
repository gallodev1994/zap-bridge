import { DomainError } from './DomainError';

export class InvalidPhoneNumberError extends DomainError {
   constructor() {
      super('Invalid phone number.');
   }
}
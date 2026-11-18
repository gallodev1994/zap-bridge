import { DomainError } from './domain.error';

export class InvalidPhoneNumberError extends DomainError {
   constructor() {
      super('Invalid phone number.');
   }
}
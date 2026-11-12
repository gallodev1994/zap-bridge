import { InvalidPhoneNumberError } from '../errors/InvalidPhoneNumberError';

export class PhoneNumber {
   private constructor(
      private readonly value: string
   ) { }

   static create(value: string): PhoneNumber {
      if (!/^\+[1-9]\d{1,14}$/.test(value)) {
         throw new InvalidPhoneNumberError();
      }

      return new PhoneNumber(value);
   }

   get number(): string {
      return this.value;
   }
}
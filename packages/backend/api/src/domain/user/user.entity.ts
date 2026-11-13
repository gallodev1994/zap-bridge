import { Email } from './value-objects/email.vo';
import { PhoneNumber } from './value-objects/phone-number.vo';
import { InvalidUserIdError } from './errors/InvalidUserIdError';

export interface UserProps {
   name: string;
   email: Email;
   phone: PhoneNumber;
   birthDate?: Date;
   createdAt?: Date;
}

export class User {
   private name: string;
   private email: Email;
   private phone: PhoneNumber;
   private birthDate?: Date;
   private readonly createdAt: Date;

   constructor(
      private readonly id: string,
      private readonly props: UserProps
   ) { }

   get userId(): string {
      return this.id;
   }

   get userPhone(): PhoneNumber {
      return this.phone;
   }

   get userEmail(): Email {
      return this.email;
   }

   static create(id: string, props: UserProps) {


      //return new User()
   }



}
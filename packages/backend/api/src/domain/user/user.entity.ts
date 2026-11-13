import { Email } from './value-objects/email.vo';
import { PhoneNumber } from './value-objects/phone-number.vo';
import { UserId } from './value-objects/user-id.vo';
import { EmailAlreadyExistsError } from './errors/EmailAlreadyExistsError';

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
   private readonly isActive: boolean;
   //private readonly rbac;

   constructor(
      private readonly id: UserId,
      private readonly props: UserProps
   ) { }

   get userId(): UserId {
      return this.id;
   }

   get userPhone(): PhoneNumber {
      return this.phone;
   }

   get userEmail(): Email {
      return this.email;
   }

   get active(): boolean {
      return this.isActive;
   }

   static create(id: UserId, props: UserProps): User {

      return new User(id,props);
      //return new User()
   }

   public changeEmail(newEmail: Email) {
      if (this.email.equals(newEmail)) {
         throw new EmailAlreadyExistsError();
      }
      this.email = newEmail;
   }



}
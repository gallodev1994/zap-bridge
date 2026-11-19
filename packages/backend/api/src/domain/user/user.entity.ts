import { Email } from './value-objects/email.vo';
import { PhoneNumber } from './value-objects/phone-number.vo';
import { UserId } from './value-objects/user-id.vo';
import { EmailAlreadyExistsError } from './errors/email-already-exist.error';
import { EmptyError } from './errors/empty.error';
import { Name } from './value-objects/name.vo';

export interface UserProps {
   name: Name;
   email: Email;
   phone: PhoneNumber;
   birthDate?: Date;
}

export class User {
   private name: Name;
   private email: Email;
   private phone: PhoneNumber;
   private birthDate?: Date;
   private isActive: boolean;
   //private readonly rbac;

   constructor(
      private readonly id: UserId,
      private readonly props: UserProps,
      isActive: boolean = true
   ) {
      const { email, name, phone, birthDate } = this.props;

      this.name = name;
      this.email = email;
      this.phone = phone
      this.birthDate = birthDate;
      this.isActive = isActive;
   }

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

   get userName(): Name {
      return this.name;
   }

   get userBirthDay(): Date | null {
      if (!this.birthDate) {
         return null;
      }
      return this.birthDate;
   }

   public activate(): void {
      this.isActive = true;
   }

   public deactivate(): void {
      this.isActive = false;
   }

   public changeEmail(newEmail: Email) {
      if (this.email.equals(newEmail)) {
         throw new EmailAlreadyExistsError();
      }
      this.email = newEmail;
   }

   static create({ id, props }: { id: UserId, props: UserProps }): User {
      return new User(id, { ...props });
   }

   static reconstitute({
      id,
      props,
      isActive
   }: { id: UserId, props: UserProps, isActive: boolean }): User {
      return new User(id, props, isActive);
   }

}
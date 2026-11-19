import { EmptyError } from "../errors/empty.error";
import { InvalidEmailError } from "../errors/invalid-email.error";

export class Email {
   constructor(private value: string) { }

   static create(value: string): Email {
      if (!value) {
         throw new EmptyError(Email.name)
      }

      const normalized = value.trim().toLowerCase();
      if (!this.isValid(normalized)) {
         throw new InvalidEmailError();
      }

      return new Email(normalized);
   }

   private static isValid(value: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
   }

   get email(): string {
      return this.value;
   }

   equals(other: Email): boolean {
      return this.value === other.value
   }
}
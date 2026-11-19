import { EmptyError } from "../errors/empty.error";
import { NameGreaterCharactersError } from "../errors/name-greater-characters.error";
import { NameWithInvalidCharactersError } from "../errors/name-invalid-characters.error";
import { NameLeastCharactersError } from "../errors/name-least-characters.error";

export class Name {
   constructor(private readonly name: string) { }

   private static validate(value: string): void {
      if (!value) {
         throw new EmptyError(Name.name);
      }

      if (value.length < 3) {
         throw new NameLeastCharactersError();
      }

      if (value.length > 50) {
         throw new NameGreaterCharactersError();
      }

      if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
         throw new NameWithInvalidCharactersError();
      }
   }

   static create(value: string) {
      const normalized = value.trim();

      this.validate(normalized)
      return new Name(normalized);
   }

   get value(): string {
      return this.name;
   }

}
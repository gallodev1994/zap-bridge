import { Email } from "./email.vo";

describe('Should coverage the email value object of user domain', () => {
   it('Should create a new email with empty value', () => {
      expect(() => Email.create('').email).toThrow("The class Email cannot have empty mandatory fields.");
   })

   it('Should create a new email with valid value', () => {
      expect(Email.create('contato.gallodev@gmail.com').email).toBe('contato.gallodev@gmail.com');
   })

   it('Should create a new email with invalid value', () => {
      expect(() => Email.create('contato.gallodevgmail.com').email).toThrow("Invalid e-mail.");
   })
});
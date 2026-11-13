import { Email } from "./email.vo";

describe('Should coverage the email value object of user domain', () => {
   it('Should create a new email with invalid value', () => {
      expect(() => Email.create('').email).toThrow('Invalid e-mail.');
   })

   it('Should create a new email with valid value', () => {
      expect(Email.create('contato.gallodev@gmail.com').email).toBe('contato.gallodev@gmail.com');
   })

});
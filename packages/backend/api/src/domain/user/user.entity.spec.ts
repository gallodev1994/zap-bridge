import { Email } from './value-objects/email.vo';
import { PhoneNumber } from './value-objects/phone-number.vo';
import { User, UserProps } from './user.entity';

describe("Should coverage user entity", () => {
   const validPhone = '+5511993110374';
   const validEmail = 'contato.gallodev@gmail.com';

   it("Should create new user without id", () => {
      const userProps: UserProps = {
         name: '',
         email: Email.create(validEmail),
         phone: PhoneNumber.create(validPhone)
      }
      expect(new User('', userProps).userId).toBe('');
   });

   it("Should create new user", () => {
      const userProps: UserProps = {
         name: '',
         email: Email.create(validEmail),
         phone: PhoneNumber.create(validPhone)
      }
      expect(new User('1', userProps).userId).toBe('1');
   });
});
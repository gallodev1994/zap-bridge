import { Email } from './value-objects/email.vo';
import { PhoneNumber } from './value-objects/phone-number.vo';
import { User, UserProps } from './user.entity';
import { UserId } from './value-objects/user-id.vo';
import { randomUUID } from 'node:crypto';
import { Name } from './value-objects/name.vo';

describe("Should coverage user entity", () => {

   const validPhone = '+5511993110374';
   const validEmail = 'contato.gallodev@gmail.com';

   const userId = UserId.create(randomUUID());
   let userProps: UserProps = {
      name: Name.create('Christian'),
      email: Email.create(validEmail),
      phone: PhoneNumber.create(validPhone),
   }

   it("Should create new user", () => {
      const user = User.create({ id: userId, props: userProps });

      expect(user.userId).toBe(userId);
      expect(user.userName.value).toBe("Christian");
      expect(user.userEmail.email).toBe(userProps.email.email);
      expect(user.userPhone.number).toBe(userProps.phone.number);
      expect(user.active).toBeTruthy();
      expect(user.userBirthDay).toBeNull();
   });

   it("Should create new user with birthday", () => {
      userProps.birthDate = new Date('2026-11-18T23:06:59.008Z');
      const user = User.create({ id: userId, props: userProps })

      expect(user.userId).toBe(userId);
      expect(user.userName.value).toBe("Christian");
      expect(user.userEmail.email).toBe(userProps.email.email);
      expect(user.userPhone.number).toBe(userProps.phone.number);
      expect(user.active).toBeTruthy();
      expect(user.userBirthDay).toEqual(new Date('2026-11-18T23:06:59.008Z'));
   });

   it("Should create new user with birthday", () => {
      userProps.birthDate = new Date('2026-11-18T23:06:59.008Z');
      const user = User.create({ id: userId, props: userProps });

      expect(user.userId).toBe(userId);
      expect(user.userName.value).toBe("Christian");
      expect(user.userEmail.email).toBe(userProps.email.email);
      expect(user.userPhone.number).toBe(userProps.phone.number);
      expect(user.active).toBeTruthy();
      expect(user.userBirthDay).toEqual(new Date('2026-11-18T23:06:59.008Z'));
   });

   it("Should create new user and deactive", () => {
      const user = User.create({ id: userId, props: userProps });
      user.deactivate()
      expect(user.active).toBeFalsy();
   });

   it("Should create new user and activate", () => {
      const user = User.create({ id: userId, props: userProps });
      user.activate()
      expect(user.active).toBeTruthy();
   });

   it("Should create new user and change e-mail", () => {
      const user = User.create({ id: userId, props: userProps });
      expect(user.userEmail.email).toBe(userProps.email.email);

      user.changeEmail(Email.create('teste@gmail.com'))
      expect(user.userEmail.email).toBe('teste@gmail.com');
   });

   it("Should create new user and change e-mail with same e-mail", () => {
      const user = User.create({ id: userId, props: userProps });
      expect(user.userEmail.email).toBe(userProps.email.email);
      expect(() => user.changeEmail(userProps.email)).toThrow('Email already exists.')
   });

   it("Should reconstitute a user", () => {
      const user = User.reconstitute({ id: userId, props: userProps, isActive: false })
      expect(user.active).toBeFalsy();
   })

});
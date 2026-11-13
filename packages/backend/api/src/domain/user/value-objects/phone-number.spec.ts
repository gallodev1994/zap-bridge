import { PhoneNumber } from './phone-number.vo';

describe('Should coverage the phone-number value object of user domain', () => {
   const defaultErrorMessage = 'Invalid phone number.';

   it('Should create a new phone-number with invalid value', () => {
      expect(() => PhoneNumber.create('0')).toThrow(defaultErrorMessage);
   })

   it('Should create a new phone-number without DDI', () => {
      expect(() => PhoneNumber.create('13996100474')).toThrow(defaultErrorMessage)
   })

   it('Should create a new phone-number with DDI and less digits', () => {
      expect(() => PhoneNumber.create('1399610047')).toThrow(defaultErrorMessage)
   })

   it('Should create a new phone-number with DDI', () => {
      const phone = PhoneNumber.create('+5513996100474');
      expect(phone.number).toBe('+5513996100474')
   })
});
import { UserId } from "./user-id.vo";


describe('Should coverage the userId value object of user domain', () => {
   const uuid = '';

   it('Should create a new userId with invalid value', () => {
      expect(() => new UserId('').value).toBe
   })


});
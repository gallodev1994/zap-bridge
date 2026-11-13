import { UserId } from "./user-id.vo";
import { randomUUID } from "node:crypto";


describe('Should coverage the userId value object of user domain', () => {
   const uuid = randomUUID();

   it('Should create a new userId with invalid value', () => {
      expect(() => UserId.create('').value).toThrow('Invalid userId.')
   })

   it('Should create a new userId with invalid uuid', () => {
      expect(() => UserId.create('123').value).toThrow('Invalid UUID.')
   })

   it('Should create a new userId with valid value', () => {
      expect(UserId.create(uuid).value).toBe(uuid)
   })

});
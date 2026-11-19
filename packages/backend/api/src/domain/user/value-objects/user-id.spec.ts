import { InvalidUUIDError } from "@/shared/errors/invalid-uuid.error";
import { InvalidUserIdError } from "../errors/invalid-user-id.error";
import { UserId } from "./user-id.vo";
import { randomUUID } from "node:crypto";


describe('Should coverage the userId value object of user domain', () => {
   const uuid = randomUUID();

   it('Should create a new userId with empty value', () => {
      expect(() => UserId.create('').value).toThrow('Invalid userId.')
   })

   it('Should create a new userId with invalid userId', () => {
      expect(() => UserId.create('123').value).toThrow('Invalid userId.')
   })

   it('Should create a new userId with invalid uuid', () => {
      let exception: unknown;

      try {
         UserId.create('123')
      } catch(error) {
         exception = error;
      }

      expect(exception).toBeInstanceOf(InvalidUserIdError);

      if(exception instanceof InvalidUserIdError) {
         expect(exception.cause).toBeInstanceOf(InvalidUUIDError)
      }
   })

   it('Should create a new userId with valid value', () => {
      expect(UserId.create(uuid).value).toBe(uuid)
   })

});
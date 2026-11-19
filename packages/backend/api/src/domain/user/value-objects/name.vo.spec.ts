import { generateRandomName } from "@/shared/utils/generateRandomName";
import { Name } from "./name.vo";

describe('Should coverage the name value object of user domain', () => {
   it('should create a valid name', () => {
      const name = Name.create('Christian');

      expect(name.value).toBe('Christian');
   });

   it('should throw when name is empty', () => {
      expect(() => Name.create('')).toThrow("The class Name cannot have empty mandatory fields.");
   });

   it('should throw when name has less than 3 characters', () => {
      expect(() => Name.create('Al')).toThrow();
   });

   it('should trim whitespace', () => {
      const name = Name.create(' Christian ');

      expect(name.value).toBe('Christian');
   });

   it('should create name with invalid characters', () => {
      expect(() => Name.create('2Christian5')).toThrow('Name contains invalid characters.');
   });

   it('should create name with max characters', () => {
      const text = generateRandomName(51)
      console.log(text);
      return expect(() => Name.create(text)).toThrow('Name must have at most 50 characters.');
   });

});
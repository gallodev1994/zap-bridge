import { randomInt } from "crypto";

export function generateRandomName(length = 50): string {
   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

   return Array.from(
      { length },
      () => alphabet[randomInt(alphabet.length)],
   ).join('');
}
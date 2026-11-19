import { UserNotFound } from "@/domain/user/errors/user-not-found";
import { UserRepository } from "@/domain/user/repositories/user.repository";
import { User } from "@/domain/user/user.entity";
import { Email } from "@/domain/user/value-objects/email.vo";

export class GetUserByEmail {
   constructor(private readonly repository: UserRepository) { }

   async execute(email: Email): Promise<User> {
      const user = await this.repository.findByEmail(email);

      if (!user) {
         throw new UserNotFound();
      }

      return user;
   }
}
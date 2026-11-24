import { UserNotFound } from "@/domain/user/errors/user-not-found";
import { UserRepository } from "@/domain/user/repositories/user.repository";
import { User } from "@/domain/user/user.entity";
import { UserId } from "@/domain/user/value-objects/user-id.vo";

export class GetUserByIdUseCase {
   constructor(private readonly repository: UserRepository) { }

   async execute(id: UserId): Promise<User> {
      const user = await this.repository.findById(id);

      if (!user) {
         throw new UserNotFound();
      }

      return user;
   }
}
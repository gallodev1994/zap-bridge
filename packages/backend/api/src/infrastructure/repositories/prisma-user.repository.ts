import { UserRepository } from "@/domain/user/repositories/user.repository";
import { User } from "@/domain/user/user.entity";
import { Email } from "@/domain/user/value-objects/email.vo";
import { UserId } from "@/domain/user/value-objects/user-id.vo";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository {
   findById(id: UserId): Promise<User | null> {
      throw new Error("Method findById not implemented." + id);
   }
   async findByEmail(email: Email): Promise<User | null> {
      throw new Error("Method findByEmail not implemented." + email);
   }
   save(user: User): Promise<UserId> {
      throw new Error("Method save not implemented.");
   }
}
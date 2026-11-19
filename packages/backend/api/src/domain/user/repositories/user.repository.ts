import { User } from '../user.entity';
import { Email } from '../value-objects/email.vo';
import { UserId } from '../value-objects/user-id.vo';

export interface UserRepository {
   findByEmail(email: Email): Promise<User | null>;
   save(user: User): Promise<UserId>;
}
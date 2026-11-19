import { randomUUIDv7 } from 'node:crypto';

import { UserRepository } from '@/domain/user/repositories/user.repository';
import { CreateUserDTO } from '../dto/create-user.dto';

import { UserId } from '@/domain/user/value-objects/user-id.vo';
import { Email } from '@/domain/user/value-objects/email.vo';
import { PhoneNumber } from '@/domain/user/value-objects/phone-number.vo';
import { Name } from '@/domain/user/value-objects/name.vo';
import { User } from '@/domain/user/user.entity';


export class SaveUserUseCase {
   constructor(private readonly repository: UserRepository) { }

   async execute(user: CreateUserDTO): Promise<UserId> {
      const id = UserId.create(randomUUIDv7());

      const newUser = User.create({
         id,
         props: {
            name: Name.create(user.name),
            email: Email.create(user.email),
            phone: PhoneNumber.create(user.phone),
            birthDate: user.birthDate
         }
      })

      return this.repository.save(newUser);
   }
}
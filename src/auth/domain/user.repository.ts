import { UserEntity } from './user.entity.ts';

export abstract class UserRepository {
  // all these names are on own, here I need to think all the methods my business needs
  abstract findUserById(uuid: string): Promise<UserEntity | null>;

  abstract registerUser(user: UserEntity): Promise<UserEntity | null>;

  abstract listUser(): Promise<UserEntity[] | null>;
}

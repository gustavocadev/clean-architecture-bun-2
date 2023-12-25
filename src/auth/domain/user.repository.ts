import { UserEntity } from './user.entity.ts';

// to use in controller.use-cases.ts and use user.repository.impl.ts in infrastructure
export abstract class UserRepository {
  // all these names are on own, here I need to think all the methods my business needs
  abstract loginUser(
    email: string,
    password: string
  ): Promise<UserEntity | null>;

  abstract registerUser(user: UserEntity): Promise<UserEntity | null>;
}

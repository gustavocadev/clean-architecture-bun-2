import { UserEntity } from './user.entity.ts';

// To use in the insfractucture layer
export abstract class UserDatasource {
  // all these names are on own, here I need to think all the methods my business needs
  abstract loginImpl(
    email: string,
    password: string
  ): Promise<UserEntity | null>;

  abstract registerUserImpl(user: UserEntity): Promise<UserEntity | null>;
}

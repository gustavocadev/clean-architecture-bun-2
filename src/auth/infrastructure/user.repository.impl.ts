import { UserEntity } from '../domain/user.entity.ts';
import { UserRepository } from '../domain/user.repository.ts';
import { UserDatasource } from '../domain/user.datasource.ts';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}

  loginUser(email: string, password: string): Promise<UserEntity | null> {
    return this.userDatasource.loginImpl(email, password);
  }

  registerUser(user: UserEntity): Promise<UserEntity | null> {
    return this.userDatasource.registerUserImpl(user);
  }
}

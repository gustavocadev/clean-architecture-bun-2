import { UserEntity } from '../domain/user.entity.ts';
import { UserRepository } from '../domain/user.repository.ts';
import { UserDatasource } from '../domain/user.datasource.ts';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}

  findUserById(uuid: string): Promise<UserEntity | null> {
    return this.userDatasource.findUserByIdImpl(uuid);
  }
  registerUser(user: UserEntity): Promise<UserEntity | null> {
    return this.userDatasource.registerUserImpl(user);
  }
  listUser(): Promise<UserEntity[] | null> {
    return this.userDatasource.listUserImpl();
  }
}

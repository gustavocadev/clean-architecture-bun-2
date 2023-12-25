import { UserDatasource } from '../domain/user.datasource.ts';
import { UserEntity } from '../domain/user.entity.ts';
import { UserMapper } from './user.mapper.ts';
import { db } from '../../data/drizzle/drizzle-db.ts';
import { users } from '../../data/drizzle/schema.ts';

// here we can already use out models from our db
export class UserDatasourceImpl implements UserDatasource {
  findUserByIdImpl(uuid: string): Promise<UserEntity | null> {
    throw new Error('Method not implemented.');
  }
  async registerUserImpl(user: UserEntity): Promise<UserEntity | null> {
    console.log(user);
    console.log(await db.select().from(users).run());

    return UserMapper.userEntityFromObject(user);
  }

  async listUserImpl(): Promise<UserEntity[] | null> {
    throw new Error('Method not implemented.');
  }
}

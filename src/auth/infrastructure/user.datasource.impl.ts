import { UserDatasource } from '../domain/user.datasource.ts';
import { UserEntity } from '../domain/user.entity.ts';
import { UserMapper } from './user.mapper.ts';
import { db } from '../../data/drizzle/drizzle-db.ts';
import { users } from '../../data/drizzle/schema.ts';
import { eq } from 'drizzle-orm';
import { HashPasswordBun } from '../../config/hashPassword.ts';

// here we can already use out models from our db
export class UserDatasourceImpl implements UserDatasource {
  constructor(
    private readonly hashPassword = HashPasswordBun.hashPassword,
    private readonly verifyPassword = HashPasswordBun.verifyPassword
  ) {}

  async registerUserImpl(user: UserEntity): Promise<UserEntity | null> {
    // Validate if email already exists
    const all_users = await db
      .select()
      .from(users)
      .where(eq(users.email, user.email));

    const exists_user = all_users.at(0);

    if (exists_user) {
      return null;
    }

    // hash password
    const hashed_password = await this.hashPassword(user.password);

    // save user in db
    await db.insert(users).values({
      email: user.email,
      last_name: user.lastName,
      name: user.name,
      password: hashed_password,
    });

    return UserMapper.userEntityFromObject(user);
  }

  async loginImpl(email: string, password: string): Promise<UserEntity | null> {
    // search email in db
    const users_filtered = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    const user = users_filtered.at(0);

    if (!user) return null;

    // compare password
    const isValidPassword = await this.verifyPassword(password, user.password);

    if (!isValidPassword) return null;

    return UserMapper.userEntityFromObject(user);
  }
}

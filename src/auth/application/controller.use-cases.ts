import { Context } from 'hono';
import { UserRepository } from '../domain/user.repository.ts';
import { db } from '../../data/drizzle/drizzle-db.ts';
import { users } from '../../data/drizzle/schema.ts';

export class AuthControllerUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  registerUser(ctx: Context) {
    return ctx.json({
      msg: 'hello from controller!',
    });
  }

  async getUsers(ctx: Context) {
    const all_users = await db.select().from(users);
    return ctx.json({
      all_users,
    });
  }
}

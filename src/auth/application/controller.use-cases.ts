import { Context } from 'hono';
import { UserRepository } from '../domain/user.repository.ts';
import { db } from '../../data/drizzle/drizzle-db.ts';
import { users } from '../../data/drizzle/schema.ts';

export class AuthControllerUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  registerUser = async (ctx: Context) => {
    const body = await ctx.req.json();

    const user = await this.userRepository.registerUser(body);
    return ctx.json({
      user,
    });
  };

  loginUser = async (ctx: Context) => {
    const body = await ctx.req.json<{
      password: string;
      email: string;
    }>();

    const { email, password } = body;

    const user = await this.userRepository.loginUser(email, password);

    return ctx.json({
      user,
    });
  };

  getUsers = async (ctx: Context) => {
    const all_users = await db.select().from(users);
    return ctx.json({
      all_users,
    });
  };
}

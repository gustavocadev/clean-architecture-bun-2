import { Context } from 'hono';
import { UserRepository } from '../domain/user.repository.ts';

export class AuthControllerUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  registerUser(ctx: Context) {
    return ctx.json({
      msg: 'hello from controller!',
    });
  }
}

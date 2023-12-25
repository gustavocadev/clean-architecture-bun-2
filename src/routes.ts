import { Hono } from 'hono';
import { AuthRoutes } from './auth/application/routes.ts';

export class AppRoutes {
  static get routes(): Hono {
    const router = new Hono();

    // define your routes here
    router.route('/api/auth', AuthRoutes.routes);

    router.get('/', (ctx) => {
      return ctx.json({
        msg: 'Hello from App Routes!',
      });
    });

    return router;
  }
}

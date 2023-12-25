import { AppRoutes } from './routes.ts';
import { Server } from './server.ts';

const server = new Server({
  routes: AppRoutes.routes,
});

server.start();

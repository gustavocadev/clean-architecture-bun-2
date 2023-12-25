import { Hono } from 'hono';

type Options = {
  port?: number;
  routes: Hono;
};

export class Server {
  public app = new Hono();
  private readonly port: number;
  private readonly routes: Hono;

  constructor(options: Options) {
    const { routes, port = 3000 } = options;
    this.port = port;
    this.routes = routes;
  }

  start() {
    // middlewares

    // routes
    this.app.route('/', this.routes);

    Deno.serve({ port: this.port }, this.app.fetch);
  }
}

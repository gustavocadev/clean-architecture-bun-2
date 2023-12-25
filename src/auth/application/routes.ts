import { Hono } from 'hono';
import { AuthControllerUseCases } from './controller.use-cases.ts';
import { UserRepositoryImpl } from '../infrastructure/user.repository.impl.ts';
import { UserDatasourceImpl } from '../infrastructure/user.datasource.impl.ts';

export class AuthRoutes {
  static get routes(): Hono {
    const router = new Hono();

    // here we used code to interact with
    const userDataSource = new UserDatasourceImpl();

    // This is just a layer for userDataSource
    const userRepository = new UserRepositoryImpl(userDataSource);

    // here we use the methods through the instace class
    const controller = new AuthControllerUseCases(userRepository);

    // define your routes here
    router.post('/register', controller.registerUser);

    router.post('/login', controller.loginUser);

    router.get('/users', controller.getUsers);

    return router;
  }
}

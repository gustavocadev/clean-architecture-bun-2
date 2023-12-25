// import { CustomError, UserEntity } from '../../domain';

import { UserEntity } from '../domain/user.entity.ts';

// un mappaer es una clase que se encarga de mapear los datos de la base de datos a la entidad y viceversa, es decir que se encarga de hacer la conversion de los datos de la base de datos a la entidad y viceversa, en este caso se encarga de validar los datos que vienen de la base de datos y convertirlos a la entidad
export class UserMapper {
  static async userEntityFromObject(object: { [key: string]: any }) {
    const { id, name, email, password, last_name } = object;

    // if (!_id || !id) {
    //   throw CustomError.badRequest('Invalid id');
    // }

    // if (!name) {
    //   throw CustomError.badRequest('Invalid name');
    // }

    // if (!email) {
    //   throw CustomError.badRequest('Invalid email');
    // }

    // if (!password) {
    //   throw CustomError.badRequest('Invalid password');
    // }

    // if (!role) {
    //   throw CustomError.badRequest('Invalid role');
    // }

    return new UserEntity(id, name, last_name, email, password);
  }
}

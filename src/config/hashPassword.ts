export class HashPasswordBun {
  static hashPassword(password: string) {
    return Bun.password.hash(password);
  }

  static verifyPassword(password: string, hashedPassword: string) {
    return Bun.password.verify(password, hashedPassword);
  }
}

import { User } from '../core/model/User';
import { UserRepository } from '../core/ports/UserRepository';
import { UserService } from '../core/usecases/UserService';
import { UserMemoryDatabaseAdapter } from '../infrastructure/UserMemoryDatabaseAdapter';

export class UserRest {
  private userService: UserService;

  constructor() {
    const userRepo: UserRepository = new UserMemoryDatabaseAdapter();
    this.userService = new UserService(userRepo);
  }

  post(values: Map<string, string>): number {
    try {
      const user = new User(
        values.get('name') ?? '',
        values.get('email') ?? '',
        values.get('password') ?? ''
      );
      this.userService.saveUser(user);
    } catch (err: any) {
      console.error(err.message);
      return 400;
    }

    return 201;
  }

  get(): number {
    const users = this.userService.getUsers();
    users.forEach((user) => console.log(user));

    return 200;
  }
}

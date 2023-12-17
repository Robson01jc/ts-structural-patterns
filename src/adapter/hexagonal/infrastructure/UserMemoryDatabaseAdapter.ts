import { User } from '../core/model/User';
import { UserRepository } from '../core/ports/UserRepository';

export class UserMemoryDatabaseAdapter implements UserRepository {
  private inMemoryUsers: Map<string, User> = new Map();

  saveUser(user: User): void {
    this.inMemoryUsers.set(user.email, user);
  }

  getUsers(): User[] {
    return Array.from(this.inMemoryUsers.values());
  }
}

import { User } from '../model/User';

export interface UserRepository {
  saveUser(user: User): void;
  getUsers(): User[];
}

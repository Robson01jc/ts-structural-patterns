import { User } from '../model/User';
import { UserRepository } from '../ports/UserRepository';

export class UserService {
  constructor(private userRepo: UserRepository) {}

  saveUser(user: User): void {
    const alreadyUsedEmail = this.userRepo
      .getAll()
      .some((userDB) => userDB.email === user.email);
    if (alreadyUsedEmail) throw new Error('Email address already exists!');
    this.userRepo.save(user);
  }

  getUsers(): User[] {
    return this.userRepo.getAll();
  }
}

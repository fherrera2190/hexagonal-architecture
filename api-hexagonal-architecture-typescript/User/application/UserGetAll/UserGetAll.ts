import { User } from "User/domain/User";
import { UserRepository } from "User/domain/UserRepository";

export class UserGetAll {
  constructor(private readonly repository: UserRepository) {}

  async run(): Promise<User[]> {
    return this.repository.getAll();
  }
}

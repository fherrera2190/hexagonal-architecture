import { User } from "User/domain/User";
import { UserId } from "User/domain/UserId";
import { UserNotFoundError } from "User/domain/UserNotFoundError";
import { UserRepository } from "User/domain/UserRepository";

export class UserGetOneById {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.repository.getOneById(new UserId(id));
    if (!user) throw new UserNotFoundError("User not found");
    return user;
  }
}

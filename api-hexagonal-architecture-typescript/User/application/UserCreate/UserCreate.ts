import { User } from "User/domain/User";
import { UserDate } from "User/domain/UserDate";
import { UserEmail } from "User/domain/UserEmail";
import { UserId } from "User/domain/UserId";
import { UserName } from "User/domain/UserName";
import { UserRepository } from "User/domain/UserRepository";

export class UserCreate {
  constructor(private readonly repository: UserRepository) {}

  async run(
    id: string,
    name: string,
    email: string,
    createdAt: Date
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserDate(createdAt)
    );

    return this.repository.create(user);
  }
}

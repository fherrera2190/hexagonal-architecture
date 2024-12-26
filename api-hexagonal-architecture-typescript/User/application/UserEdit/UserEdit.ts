import { User } from "User/domain/User";
import { UserDate } from "User/domain/UserDate";
import { UserEmail } from "User/domain/UserEmail";
import { UserId } from "User/domain/UserId";
import { UserName } from "User/domain/UserName";
import { UserRepository } from "User/domain/UserRepository";

export class UserEdit {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string, name: string, email: string): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserDate(new Date())
    );
    return this.repository.edit(user);
  }
}

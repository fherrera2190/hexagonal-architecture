import { UserId } from "User/domain/UserId";
import { UserRepository } from "User/domain/UserRepository";

export class UserDelete {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<void> {
    await this.repository.delete(new UserId(id));
  }
}

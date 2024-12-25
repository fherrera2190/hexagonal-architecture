//modelado de dominio

import { UserDate } from "./UserDate";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export class User {
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt: UserDate;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    createdAt: UserDate
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }

  public nameAndEmail(): string {
    return `${this.name} - ${this.email}`;
  }
}

export class UserName {
  constructor(public readonly value: string) {
    this.value = value;
    this.ensureIsValid(value);
  }
  private ensureIsValid(value: string): void {
    if (this.value.length < 3) {
      throw new Error("User Id must be at least 3 characters long");
    }
  }
}

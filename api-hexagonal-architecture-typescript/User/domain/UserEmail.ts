export class UserEmail {
  constructor(public readonly value: string) {
    this.value = value;
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error("Invalid email format");
    }
  }
}

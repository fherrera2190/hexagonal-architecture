export class UserDate {
  constructor(public readonly value: Date) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid(): void {
    if (this.value > new Date()) {
      throw new Error("Invalid date");
    }
  }
}

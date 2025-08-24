export class Account {
  public username: string;
  private password: string;
  public readonly accountId: number;

  constructor(username: string, password: string, accountId: number) {
    this.username = username;
    this.password = password;
    this.accountId = accountId;
  }
}

export class UserBase{
  id:string;
  username: string;
  name: string;
  email: string;
  constructor(
      id: string,
      name: string,
      username: string,
      email: string,
  ) {
      this.id=id;
      this.email = email;
      this.name = name;
      this.username = username;
  }
}

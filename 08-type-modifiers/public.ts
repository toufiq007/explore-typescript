// class User {
//   public email: string;
//   public password: string;
//   private readonly city:string = "Dhaka"
//   constructor(email: string, password: string) {
//     this.email = email;
//     this.password = password;
//   }

// }

// more readable
class User {
  constructor(
    public email: string,
    public password: string,
    private userId: string
  ) {
    this.email = email;
    this.password = password;
    this.userId = userId;
  }
}

const limon = new User("limon@gmail.com", "sisisboss", "12121");
limon.email;

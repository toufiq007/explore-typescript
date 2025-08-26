class User {
  private _coursecount = 1;
  constructor(public email: string, public password: string) {
    this.email = email;
    this.password = password;
  }

  // getter
  get getAppleEmail(): string {
    return `apple  ${this.email} and course count ${this._coursecount}`;
  }

  //   getter --> getter cannot get any argument
  get getCourseCount(): number {
    return this._coursecount;
  }

  // setter --> must take one argument
  set setCourseCount(newCourseCount: number) {
    this._coursecount = newCourseCount;
  }
}

const u1 = new User("limon@gmail.com", "sisisboss");
let first_count = u1.getCourseCount;
console.log(first_count);
u1.setCourseCount = 10;
first_count = u1.getCourseCount;
console.log(first_count);

export {};

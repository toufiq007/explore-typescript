// type narrowing in typescript
// it means the extra checking or caring the business logic of the code

// case one
function detectType(value: number | string) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value + 3;
}

// case two
function provideId(id: string | null) {
  if (!id) {
    console.log("please provide the id");
    return;
  }
  id?.toLowerCase();
}

// another case
function printAll(str: string | string[] | null) {
  if (str) {
    if (typeof str === "object") {
      for (const st in str) {
        console.log(st);
      }
    }
    if (typeof str === "string") {
      // extra check if str is empty or not
      if (str.length > 0) {
        console.log("this is a string", str);
      }
    }
  }
}

// this is a function takes an argument as number and return value also a number
function placeHolder(value: number): number {
  return value;
}

// now make a function takes an argument as string and return also a string
function placeHolder2(value: string): string {
  return value;
}

// now make a function takes an argument as boolean and return also a boolean
function placeHolder3(value: boolean): boolean {
  return value;
}

// now make a generics function that takes argument and typescript decides what should be typeof the argument and return as well

// this is the generics function that takes anything and typescript decides what should be the arguments and and types and return value of the function
function placeHolder4<T>(args: T): T {
  return args;
}

placeHolder4(10);
placeHolder4("limon");
placeHolder4(true);

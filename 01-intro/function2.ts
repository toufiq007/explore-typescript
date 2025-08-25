// return more accurate value from the function

function addTwo(a: number): number {
  return a + 2;
  // return "hello"
}

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

// const heros = ["limon","toufiq"]
const heros = [1, 2];

heros.map((hero): string => {
  return "";
});

// log the error
function consoleError(errMessage: string): void {
  console.log(errMessage);
}

// handled the error
function handleError(errMessage: string): never {
  throw new Error(errMessage);
}

export {};

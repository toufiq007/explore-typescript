// more about type narrowing

// instance of
function showDetails(x: Date | string) {
  if (x instanceof Date) {
    const date = x.getDate();
  } else {
    // make the string uppercase
    x.toUpperCase();
  }
}


// type predicates not understand properly
type Fish = {
    swim(): void 
}
type Bird = {
    fly: ()=> void
}

// function isFish (pet: Fish | Bird):boolean{

// }
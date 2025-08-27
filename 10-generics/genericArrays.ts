// this is a function return the first element of a number array
function getFirstElement(array: number[]): number {
  return array[0];
}
// this is the generic function
function genericGetFirstElement<T>(array: T[]): T {
  return array[0];
}

// array reverse with generics
function arrayReverse<T>(arr: T[]): T[] {
  return arr.reverse();
}


// find index of an element from an array
function indexOfElement<T> (array:T[], value:T): void {
  console.log(array.indexOf(value))
}


// 3: Merge Two Arrays
function mergeTwoArrays<T> (arr:T[],arr2:T[]):T[]{
  return [...arr,...arr2]
}




// more example
function printTheArray<T>(array: T[]): void {
  array.forEach((arr) => console.log(arr));
}

genericGetFirstElement([1, 2, 3]);
genericGetFirstElement(["limon", "toufiq"]);

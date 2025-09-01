
/**
    Array utilize mapping
 */

type ArrayOperations = "first" | "last" | "length"
type arrayFunc<T> = (arr:T[])=> T | number

const numberArrayMapping: Record<ArrayOperations, arrayFunc<number>>= {
    first: (arr)=> arr[0],
    last: (arr)=> arr[arr.length - 1],
    length: (arr)=> arr.length
}
const stringArrayMapping: Record<ArrayOperations, arrayFunc<string>>= {
    first: (arr)=> arr[0],
    last: (arr)=> arr[arr.length - 1],
    length: (arr)=> arr.length
}


console.log(numberArrayMapping.first([10,20,30]))
console.log(stringArrayMapping.first(["limon","toufiq"]))
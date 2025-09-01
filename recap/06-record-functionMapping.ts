
/**
    record function mapping in typescript
    *************************
    Function mapping
    Record ব্যবহার করে key অনুযায়ী function রাখতেও পারো:
 */

type Operations = "sum" | "multiply"
type mathFunc = (a:number,b:number)=> number

const operations : Record<Operations, mathFunc> = {
    sum: (a:number,b:number)=> a + b,
    multiply: (a:number,b:number)=> a * b 
}

console.log(operations.sum(10,20))
console.log(operations.multiply(10,20))


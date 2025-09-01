
/**
    1. String Utilities Mapping
 */

 /**
  Record<Type,function>
   --> first parameter holo actual type
   --> second parameter holo function je kivabe modify kora hobe or actual function mapping
  */

type stringsOperations = "uppercase" | "lowercase" | "capitalize";
type stringFunc = (str:string)=> string

const strOpeations:Record<stringsOperations,stringFunc> = {
    uppercase: (str:string)=> str.toUpperCase(),
    lowercase: (str:string)=> str.toLowerCase(),
    capitalize: (str:string)=> str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(strOpeations.uppercase("limon"))
console.log(strOpeations.capitalize("lion"))

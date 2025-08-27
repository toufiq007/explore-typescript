
// interface generics in typescript
interface User {
    name:string
    age:number
}

// generics interface
// i make this id is generic type and when creation of the 
interface User2<T> {
    id:T
    name:string 
    age: number
}
const userOne : User2<string> = {
    id:"1212",
    name:"limon",
    age: 20
}

const userTwo : User2<number> = {
    id: 121212,
    name:"toufiq",
    age: 21
}
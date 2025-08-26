
// union type in typescript
let myScore: number | string = 44

// now myScore can be number or string

type User = {
    name: string 
    id : number
}
type Admin = {
    username:string 
    id: number 
}
let limon:User | Admin = {name:"limon",id:334}

limon = {
    username:"limo008",
    id:334
}


// usecase of union
const getDBId = (id:number | string)=>{
    // makes api call from here
    console.log(`db id is ${id}`)
}

// where union is became problematic
// so eivabe type check kore nile hoye jabe 
const dbOperation = (id: number | string)=>{
    // id.toUpperCase() // this should be problematic
    if (typeof id === "string"){
        id.toUpperCase()
    }
    if (typeof id === "number"){
        id + 2
    }
}



// arrays with union types
const data: (number | string)[] = ['limon',21,'toufiq',73]








console.log(limon.username)
export {}




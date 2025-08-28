
// varialbes and types
let myName : string = "limon"
let myAge : number = 10
let isStudent : boolean = true 


// arrays
let numbers:number[] = [1,2,3,4,5]
let friends: Array<string> = ['limon','toufiq']


// tuples
let person: [string,number,boolean] = ["limon",10,true]



// objects
type Student = {
    name: string
    age: number 
    isStudent:boolean
}
let std1 :Student = {
    name:"limon",
    age:10,
    isStudent: true
}

// functions
function add (a:number,b:number):number{
    return a+ b
}
function greeting (name:string):string{
    return `Hello ${name}`
}
// function with optional parameter
function fullInfo (name:string, age?:number){
    // here age is the optional property
    console.log(`hello ${name}`)
}
add(10,20)
greeting("limon")
fullInfo("limon")



// type inference
let num1 = 10
let name2 = "limon"
let isStudent2 = false




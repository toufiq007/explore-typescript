
// typescript interfaces

interface UserType {
    readonly dbId: string
    email: string
    userId:string
    googleId?:string

    // option one to add method in interfaces
    // startTrial: ()=>string
    // addSum: (a:number,b:number)=> number


    // option two to add method in interfaces
    startTrial(trailOption:number): number
    addSum(a:number,b:number): number
    getCoupon(name:string): number
}

const Limon: UserType = {
    dbId: "db id",
    email: "limon@gamil.com",
    userId: '2121212jkdskj',
    
    // function implementation
    startTrial: (trialOption)=> {
        return trialOption
    },

    addSum: (a,b)=>{
        return a + b
    },

    getCoupon : (name)=>{
        return 20
    }

}

Limon.email = "toufiq@gmail.com"
// Limon.dbId = "fdkdfkdf"

Limon.startTrial(20)
const sum = Limon.addSum(10,20)

console.log(sum)


export {}



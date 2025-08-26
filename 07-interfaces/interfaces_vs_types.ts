
// interfaces vs types

interface UserType {
    readonly dbId: string
    email: string
    userId:string
    googleId?:string
    startTrial(trailOption:number): number
    addSum(a:number,b:number): number
    getCoupon(name:string): number
}

interface UserType {
    githubToken?: string
}

interface Admin extends UserType {
    role: "admin" | "TA" | "learner"

}



const Limon: Admin = {
    dbId: "db id",
    email: "limon@gamil.com",
    userId: '2121212jkdskj',
    githubToken: "fdksfsakff",
    role:"admin",
    
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

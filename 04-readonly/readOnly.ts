type User = {
  readonly _id: string; // this id cannot be changed only read only this property
  name: string;
  email: string;
  isActive: boolean;
  credCard?: number // optional property
};

let myUser:User = {
    _id: "121212",
    name:"limon",
    email: "limon@gmail.com",
    isActive:false
}

type cardNumber = {
    cardnumber:string
}
type cardDate = {
    carddate:string
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}


// myUser._id = "212112" // cannot do this



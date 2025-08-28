// Partial --> sob gulo property kei optional kore dey
// Required --> sob gulo property kei required kore dey
// Pick --> ekta type object theke ektai property required kore dey --> ekhane union type o deuya jabe

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function updatedUser(user:IUser, updatesUser: Partial<IUser>){
    
}
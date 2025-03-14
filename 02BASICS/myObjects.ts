// const User = {
//     name : "manoj",
//     email : "m@gmail.com",
//     isActive:true
// }

// function createUser({name:string,isPaid:boolean}){

// }

// let newUser = {name:"manoj",isPaid:true,email:"httht"}

// createUser(newUser) // no error

// //createUser({name:"manoj",isPaid:true,email:"httht"}) //error

// function createCourse():{name:string,isPaid:boolean}{
//     return {name:"manoj",isPaid:true}
// }

// type User = {
//     name : string;
//     email : string;
//     isActive : boolean
// }

// function createuser(user:User) : User {
//    return user
// }

// createuser({name:"",email:"",isActive:false})

type User = {
    readonly _id :string;
    name:string;
    email:string,
    isActive:boolean
    creditCardDetails?:number // optional field
}

let myUser: User = {
    _id: "123",
    name:"mani",
    email:"@.cg",
    isActive:false
}

// myUser._id = "1" //error

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

export {}
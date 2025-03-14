function addTwo(num : number) : number {
    return num +2
}

addTwo(7)

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("Manoj")


function signUpUser(name:string,email:string,isPaid : boolean) {

}

signUpUser("1","2",true)

const getHello = (s:string) : string => {
    return "hello"
}

const heros = ["rc","bhaai","toyger"]

heros.map((hero):string => {
    return `hero is ${hero}`
}) //better syntax

function consoleError(errmsg : string) : void {
    console.log(errmsg)
}

function fail(msg:string) :never {
    throw new Error(msg)
}


export {}
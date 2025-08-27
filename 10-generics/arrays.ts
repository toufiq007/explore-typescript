

const score : Array<number> = [1,2,3,4,4]
const names : Array<string> = ["limon"]

// now write a generic arrays
function identitry<T>(value: T):T{
    return value
}
// generic syntax in regular function
function getSearchProduct<T>(product:T[]):T{
    const productIndex= 1
    return product[productIndex]
}
// syntax in arrow function
const getGenericSearchProduct = <T>(products: T[]): T => {
    return products[1]
}


identitry(10)
identitry('limon')
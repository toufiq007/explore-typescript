
/**
    4. Omit

👉 ধরো তোমার Product আছে, কিন্তু API তে password বা costPrice পাঠাবে না।
Omit<Product, "costPrice"> দিয়ে public data বানাও।
 */

type Product = {
    name:string
    id: number 
    costPrice:number
    category:string
}
let productFromApi: Product = {id:121,name:"Macbook air",costPrice:599,category:"laptop"}
function sendData(product:Omit<Product,"costPrice">){
    const payload = {
        ...product
    }
    return payload
}
// jodi predeclared object function e pass kori tokhn extra property thakleu seta add kore na
// let backendPayload = sendData(productFromApi) 

// ekhane inline ei object pathate hobe
let backendPayload = sendData({id:101,name:"macbook air",category:"laptop"}) 
console.log(backendPayload)


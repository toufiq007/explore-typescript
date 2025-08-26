
// tuples types in typescript
// elements in specific order then should be used tuples

const user : [string, number] = ['limon',21]

// classic example
const rgb: [number,number,number]= [255,122,321]


// problematic
// because push,pop,shift,unshift method can be used after declaring the tuples types
// user.push(true)



export {}



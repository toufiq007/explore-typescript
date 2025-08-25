// any keyword in typescript

// !  here implicit type must be declared
// let hero;
// function getHero(){
//     return "IRONMAN"
// }
// hero = getHero()
// console.log(hero)


// ! correct way to write this code
let hero: string;
function getHero() {
  return "SPIDER-MAN";
}
hero = getHero();
console.log(hero);

const prompt=require("prompt-sync")();

let b = prompt( "Enter your favourite color choose which has option-red/green/blue:");
switch (b) {
  case 'red':
    console.log("Red fav");
    break;
  case 'blue':
    console.log("blue fav");
    break;
  case 'green':
    console.log("green fav");
    break;
  default:
    console.log("Invalid");
}
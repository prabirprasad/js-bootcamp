let temp = 55

//Logical AND (&&) operator
// Logical OR (||) operator

if(temp >= 60 && temp <= 90) {
    console.log('It is preety nice out');
} else if(temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('Eh. Do what you want');
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer some vegan options');
} else {
    console.log('Offer up anything to the menu');
}

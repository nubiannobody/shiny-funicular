let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    return myPoints += 3;
}

function remove1Point() {
    return myPoints -= 1;
}

remove1Point();
add3Points();
add3Points();
add3Points();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints);
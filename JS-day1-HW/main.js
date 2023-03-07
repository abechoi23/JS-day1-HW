//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let match = false;
    for (let name of dog_names) {
        if (dog_string.toLowerCase().includes(name.toLocaleLowerCase())) {
            console.log(`Matched ${name}`);
            match = true;
        }
    }
    if (!match) {
        console.log('No Matches');
    }
}

findWords(); 

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, 'even index');
    }
}

replaceEvens(arr);
console.log(arr)


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += s;
    }
    return result;
  }


//   The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

//   Examples
//   numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
//   numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
//   numberToPower(10, 6) // -> 1000000

function numberToPower(number, power){
    console.info(Math.log2(1024));
    let result = 1;
    for (let i = 0; i < power; i++) {
      result *= number;
    }
    return result;
  }
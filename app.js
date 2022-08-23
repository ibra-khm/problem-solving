// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.
console.log("----------Q1---------")

let inventory = [
    {name: "apples", available: true},
    {name: "pears", available: true},
    {name: "oranges", available: false},
    {name: "bananas", available: true},
    {name: "blueberries", available: false},
];

function createList() {
    let Cart = [];
    inventory.forEach((inventory) => {
        if (inventory.available == true) {
            Cart.push(inventory.name);
        }
    });
    console.log(Cart);
}
createList();




// Q2:map
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].
console.log("----------Q2---------")

function sort() {
    let arr1 = [1, 2, 3, 4, "idk", 5];
    let arr2 = [];
    arr1.map((elem) => {
        if (elem % 2 == 0) {
            arr2.push("Even")
        } else if (elem % 2 == 1) {
            arr2.push("Odd")
        } else {
            arr2.push("N/A")
        }
    });
    console.log(arr2);
}
sort();



// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].

console.log("----------Q3---------")
function notInFirstArray(arr1, arr2) {
    return arr2.filter((elem) => {
        return !arr1.includes(elem);
    });
}
console.log(notInFirstArray([1 , 2 , 3, 6], [3, 2, 1, 5, 6, 7]));



// Q4:reduce
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
console.log("----------Q4---------")
function reversedString(input) {
    const lettersArr = input.split("");
    let reversedWord = lettersArr.reduce((prev, curr) => {
        return curr + prev;
    });
    console.log(reversedWord);
}
reversedString("hello")


// Q5: regex
// Write a function named isNum that takes in a string or number of any length. 
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false
console.log("----------Q5---------")
function isNum(text) {
    let regex = /[0-9]/g;

    console.log(regex.test(text));
}
isNum("hel1o");
isNum("hello");


// Q6:regex
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these 
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.

// function matchMonth()

console.log("----------Q6---------")

function matchMonth() {
    let question = prompt("In Which Month is Halloween?");
    let regex = /(^\s*?october\s*?$|^\s*?oct\s*?$)/ig;
    console.log(regex.test(question));
}

matchMonth();




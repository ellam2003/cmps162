<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CMPS 162: Module 4 Programming Project</title>
<style>* { font-family: monospace; }</style>
<script>

//-----------//
// Functions //
//-----------//
console.log("Functions");

// 1. Write a function named 'greet' that greets the user. The greeting should appear
//    in an alert or logged to the console. Make sure that you call it as well.
function greeting() {
  alert("Hello");
  console.log(greeting);
}
greeting();


//

let num1 = 5;
let num2 = 7;

// 2. a. Write a function named 'sumAndPrint' that takes two numbers as parameters,
//    adds them together, and logs the result to the console.
//    b. Call the function passing in num1 and num2. 
function sumAndPrint(num1, num2) {
  return num1 * num2;
  console.log(sumAndPrint);
}
sumAndPrint();
//review this later 

// 3. a. Write a function named 'sum' that takes two numbers as parameters,
//    adds them together, and returns the result. 
//    b. Set the default value of both numbers to 0.
//    c. Call the function and log the result to the console.
function sum(2, 3){
  return 2 * 3;
  default :
    num 1 = 0;
    num 2 = 0;
  console.log(sum);
}
sum();

// 4. a. create a variable that contains an array of at least six different integers. 
//    b. Log your array variable to the console. 
//    c. Write a function named 'findSmallest' that finds the smallest number in
//    an array and returns the result. For example, the answer for [23, 54, 3, 6, 4, 46] 
//    should be the number 3. Note that the function should take an array as input data.
//    d. Call the function passing in the array you created in step 4.a and log the result 
//    to the console. 
var nums = [1, 2, 3, 4, 5, 6];
function findSmallest() {
  var smallest = nums[0];
  for(var i = 0; i <= 5; i++){
    if(nums[i] < smallest) smallest = nums[i];
  }
  console.log(findSmallest);
}
return findSmallest();
//incomplete


// 5. a. create a variable that contains an array of at least six elements. 
//    b. Log your array variable to the console. 
//    c. Write a function named 'everySecondElement' that takes as
//    input an array and returns every second element in a new array. For
//    example, everySecondElement([1, 2, 3, 4, 5, 6]) should return [2, 4, 6].
//    Hint: one solution uses the % operator.
//    d. Call the function passing in the array you created in step 5.a and log the result.
var cakes = ["Red velvet", "Vanilla", "Chocolate", "Birthday", "Lemon", "Strawberry"];
console.log(cakes);
function everySecondElement(arr, nth) {
  return arr.filter((_element, index) => {
    return index % nth === 0;
  });
}
//another attempt
function everySecondElementTwo(el, index, arr) {
  if (index === 0) {
    return true;
  } else {
    return (el.answer === arr[index % 2].answer);
  }
}

//--------//
// Switch //
//--------//
console.log("Switch");

// 1. a. Create an empty variable called thisMonth.
//    b. Using JavaScript's buitl-in Date object, set the thisMonth variable to the current month's 
//    numerical value. 
//        Note: Find the Date object methods at https://www.w3schools.com/jsref/jsref_obj_date.asp
//        Note: Step a and step b can actually be combined into a single expression.
//    c. Code a JavaScript switch statement that accepts the thisMonth variable as the argument. The 
//    case statements should log the name of the month to the console.
//        e.g., if the thisMonth variable contains the number 1, then the word 'February' should be 
//        logged to the console. 
var thisMonth = new.getMonth(); 
switch (thisMonth) {
case 2 :
}
console.log(thisMonth);


//-------//
// While //
//-------//
function factorial_for(n) {
  var total = 1;
  for (var i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial_for(9));

console.log("While");

// 1. a. Create a factorial_while function that uses a while loop but otherwise
//    returns the same results as the factorial_for function above.
//    b. call your factorial_while function passing in the number 9 as the argument
//    and log the result to the console.
//variable has already been declared
while (i = 1) {

}
//Sorry Jeff, loops are not my strong suit and I just don't 
//understand them, I want to submit my hw on time, but I will
//keep looking into them and try to understand :( 


//----------//
// Do-While //
//----------//
console.log("Do-While");

// 1. a. Create a factorial_do_while function that uses a do while loop but otherwise
//    returns the same results as the factorial_for function above.
//    b. call your factorial_do_while function passing in the number 9 as the argument
//    and log the result to the console.
do {
  i++;
  while(i = 1)
}


</script>
</head>
<body>
  See console!
</body>
</html>
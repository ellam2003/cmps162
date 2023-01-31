<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CMPS 162: Module 3 Programming Project</title>
<style>* { font-family: monospace; }</style>
<script>

//---------//
// Strings //
//---------//
console.log("Strings");

// 1. Make all countries in the following array follow the same formatting:
//    The first letter should be upper case, the rest lower case. Print the
//    result to the console.
var upperCountries = countries[].charAt(0).toUpperCase();
var lowerCountries= countries[].charAt(1, countries[].length - 1).toLowerCase();
var countries = ["AustraliA", "greece", "PERU", "ChInA"];

// 2. Get every second and third letter from each country and concatenate them.
//    Print the results to the console.
var twoThree = countries[].charAt(1) + countries[].charAt(2);

// 3. In the sentence below replace 'dart' with 'arrow' by using the indexOf
//    and slice functions.

var sentence = "Time flies like an dart; fruit flies like a banana.";
var removeReplace = countries.slice(countries.indexOf("dart"));

// 4. Find the index of the last occurrence of flies in sentence.
var indx = countries.lastIndexOf("flies");

// 5. Prompt the user for a string, reverse it, and show the result to the user.
var userStr = prompt("Provide a String");
alert(reverse(userStr));



//---------//
// Numbers //
//---------//
console.log("Numbers");

// Use the following variable to answer the next questions.

var value = 13.3;

// 1. Round the value using normal math rules.
var roundedNum = Math.round(value);
// 2. Round the value up.
var roundedUp = Math.ceil(value);
// 3. Round the value down.
var roundedDown = Math.floor(value);
// 4. Simulate a coin flip by generating a random number. Assume the coin is
//    fair and print the result, heads or tails, to the console.
var coinFlip = (num *10) + 1;


//-------//
// Dates //
//-------//
console.log("Dates");

// 1. Prompt the user for their age and proceed to show in what year they
//    were born (you can assume they already had their birthday in the current
//    year).
var userAge = prompt("What is your exact birthday?");
alert(userAge.getFullYear());

// 2. Make a program that does the following: (1) Use a prompt to obtain the
//    birth year of the user. (2) Use a prompt to obtain the birth month of
//    the user. (3) Use a prompt to obtain the birth day of the user.
//    (4) Calculate how old the user is in days. (5) Show the result to
//    the user.
var birthYear = prompt("What is your birth year?");
var birthMonth = prompt("What month were you born?");
var birthDay = prompt("What day were you born?");
//I am not really sure how to do this, I am going to assume you convert the years to days then the 
//months to days and add it to the days they give you. Will check back later
var yearDays =
alert()


</script>
</head>
<body>
  See console!
</body>
</html>
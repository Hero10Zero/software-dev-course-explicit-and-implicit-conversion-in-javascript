/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let result = Number("5") - 2;// Explicit conversion of numeric string to a number
console.log("The result is: " + result);

let isValid = Boolean("false");
// Explicit conversion: using Boolean() to convert a string to a boolean; Already Correct
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // Explicit conversion of string to number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//Examples 
let implicitConversion = "The answer is " + 86; // Implicit conversion: number to string during concatenation
console.log(implicitConversion); // Output: "The answer is 86"

let explicitConversion = String(38); // Explicit conversion: number to string
console.log("Explicit conversion: " + explicitConversion); // Output: "Explicit conversion: 38"
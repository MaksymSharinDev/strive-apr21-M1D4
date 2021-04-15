/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

//I trying TDD Approach and minimal code writing for raise the challenge level 


const randMinMax = function(min,max){ return Math.floor(Math.random() * (max - min)) + min; }

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/


;(function(){
    for (let i of Array(5) ) {
    let [l1,l2] = [ randMinMax(1,10) , randMinMax(1,10)  ] 
    const area = (a,b) => a*b
    console.log( `${l1}x${l2} Area : ${area(l1,l2)}` )
    }
})()


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

;(function(){
    for (let i of Array(2) ) {
    let [n1,n2] = [randMinMax(1,10) , randMinMax(1,10) ] 
    const crasySum = (int1,int2) => int1!==int2 ? int1+int2 : int1*int2 
    console.log( `check ${n1} and ${n2} ${ n1===n2 ? "mol" : "sum" } ${crasySum(n1,n2)}` )
    n1=n2
    console.log( `check ${n1} and ${n2} ${ n1===n2 ? "mol" : "sum" } ${crasySum(n1,n2)}` )
    }
})()

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

// https://en.wikipedia.org/wiki/Absolute_difference
;(function(){
    for (let i of Array(2) ) {
    let n = randMinMax(-10,10)
    let toPos = ( N ) => N < 0 ? -N : N
    const crasySum = givenN =>  givenN>19 ? ( toPos(givenN) + 19) *3 : toPos(givenN) + 19   
    console.log ( "n: ", n, "n2: ", 19, "result: ", crasySum(n) )       
    n = randMinMax(20,30)
    console.log ( "n: ", n, "n2: ", 19, "result: ", crasySum(n) ) 
    }
})()

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
;(function(){
    const boundary= (int) => ((int >= 20) && (int <= 100)) || ( int===400 )
    let n = randMinMax(-10,19) ;
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 
     n = randMinMax(101,111) ;
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 
     n = 400
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 
    n = randMinMax(101,111) ;
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 
    n = randMinMax(21,99) ;
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 
    n = 20 ;
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 
    n = 100 ;
    console.log (`boundary: ${boundary(n)} with INT ${n} `) 


})()


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
;(function(){

const strivify = word => word.startsWith("Strive") ? word : "Strive" + word
let testString1 = "text" 
console.log (`\nargument: ${testString1} \nstrivifyOutput: ${strivify(testString1)} `) 
let testString2 = "StriveAnotherText"
console.log (`argument: ${testString2} \nstrivifyOutput: ${strivify(testString2)} `) 
})()
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
;(function(){

    const check3and7 = N => 
    { return    N>0 ?  (
                N%3 === 0 && N%7 === 0 ? 
                "7 and 3" : 
                N%3 === 0 ? "only 3" :
                N%7 === 0 ? "only 7" : 
                "neither 3 or 7"
                ) : "not a positive number"
    }
    let number = randMinMax(-10,20) ;
    console.log( randMinMax(-10,20) );
    })()
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
;(function(){
const reverseString = str => str.split("").reverse().join("")
console.log( "\nreverseString ---> " + reverseString("reverseString") )
})()
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
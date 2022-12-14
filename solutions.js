"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 *
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */

//problem01
// Define a function named isGreaterThan that takes in two values and returns a true if the first argument is greater than the second argument otherwise it should return false. If either argument is not a number, return false;

function isGreaterThan(a,b){
    if (isNaN(a) || isNaN(b) === true){
        return false
    }
    if (parseFloat(a) > parseFloat(b) === true){
        return true
    }
     return false
}

//p02
// Define a function named isLessThan that takes in two values and returns a true if the first argument is less than the second argument otherwise it should return false. If either argument is not a number, return false;

function isLessThan(a,b){
    if (isNaN(a) || isNaN(b) === true){
        return false
    }
    if (parseFloat(a) < parseFloat(b) === true){
        return true
    }
    return false
}


//p03
// Define a function named isEqualNumber that takes in two values and returns a true if the first argument is equal to the second argument, otherwise it should return false. If either argument is not a number return false;

function isEqualNumber(a,b){
    if (isNaN(a) || isNaN(b) === true){
        return false
    }
    if (parseFloat(a) === parseFloat(b)){
        return true
    }
    return false
}

//p04
// Define a function named isEqual that takes in two values and returns a true if the first argument has the same value and type as the second argument, otherwise it should return false.

function isEqual(a,b){
    if (a === b){
        return true
    }
    return false
}

//p05
// Define a function named isNot that accepts a boolean argument and returns the opposite value of the argument. It should return false if the argument is null or not a boolean.

function isNot(bool){
    if(bool === false){
        return true
    }
    return false
}

//p06
// Define a function named calcAbs that accepts a number argument and returns the absolute value of the argument. It should return O (zero) if the arguments is null or not a number.

function calcAbs(a){
    if (a < 0){
        return a * -1;
    }
    if (a > 0){
        return a;
    }
    return 0
}

//p07
// Define a function named calcCube that accepts a number argument and returns the cubed value of the argument. It should return O (zero) if the arguments is null or not a number.

function calcCube(a){
    if (isNaN(a) === true){
        return 0
    }
    return a ** 3
}

//p08
//Define a function named isTypeMatch that accepts two arguments and returns true if the types of the arguments match. It should return false if either arguments is null.

function isTypeMatch(a, b) {
    if (typeof a === typeof b){
        return true
    }
    return false
}

//p09
//Define a function named findLongestString that accepts two string arguments and returns the string with the greatest length. If only one argument is a string, return that argument. If neither arguments are strings, return and empty string.

function findLongestString(a,b){
    if ((typeof a !== `string`) && (typeof b !== `string`)){
        return ``
    }
    if (a.length > b.length){
        return a
    }
    if (a.length < b.length){
        return b
    }
    if ((typeof a === `string`) && (typeof b !== `string`)){
        return a
    }
    if ((typeof a !== `string`) && (typeof b === `string`)){
        return b
    }

    return ``
}

//p10
// Define a function named isFactor that accepts two number arguments and returns true if the first argument is a factor of the second argument. It should return false if either argument is null or not a number. Also return false if the first argument is 0 (zero).

function isFactor(a,b){
    if (typeof a !== `number`){
        return false
    }
    if (b % a === 0){
        return true
    }
    return false
}
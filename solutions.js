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

function add(a,b){
    if (isNaN(parseFloat(a) + parseFloat(b))){
        return false
    }
    return parseFloat(a) + parseFloat(b)
}
console.log(add(3.3,4));

function calcCube(a){
    if (typeof a === `number`){
        return a ** a
    }
        return 0
}

function isTypeMatch(a,b){
    return typeof a === b
}

function isFactor(a,b){
    if (a === true){
        return false
    }
    if (b % a === 0){
        return true
    }
    else{
        return false
    }
}
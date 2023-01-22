//One of the nest thing about JavaScript is Functional Programming and FP is incomplete without Higher Order Functoin.

// Function which take another function as argument or return another function as argument

//higher order function and callback function...

// Functions are the first class citizens of JavaScript.

/*

Different methods best and ideal use and their working under the hood --- filter, map, foreach, and many more ... etc.
A - Some-what prepared -- explanation and example are ready but I am looking for a way like how I will get the
    way to debug all of them and way to understand tham under the hood.

Breaking reference is how much important in JavaScript
    -> Call By Value and Call By Reference.
    -> Different Ways to break the reference like ..., JSON, cloneDeep etc. and best ways to use them and in which case, what to use.
    and basically referencing concept in general to use them wisely so nothing breaks because of refrenceing.
A - Remaining...

Async, await, Promising
    -> Good and best use of this so that we can handle things betterly.
    -> Different use of then and catch for different scenarios.
A - Almost done - need to think way and code for explaining this.

Funciton:
    Rules of using functions.
    -> Side Effects of Functionns...

Best and Widely used Design-Patterns:
    Find all those Design-Patterns who are more on OOPs as they are more useful !!

-- Remaining...

*/

const a = [1, 2, 3, 4, 5, 6];

console.log(a);

console.log(a.filter(num => num % 2));
let odds = a.filter(num => num % 2); // return odd ones.

console.log(odds);

odds[0] = '5';

console.log(odds);

console.log(a);

a.filter(num => num % 2 === 0); // return even ones.

console.log(a.filter(num => num % 2 === 0));

// Filter return the shallow copy of the array.

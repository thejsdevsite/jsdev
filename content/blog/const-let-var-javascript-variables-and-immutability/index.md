---
title: const, let, var; JavaScript variables and immutability
date: "2020-08-01T22:12:03.284Z"
description: "const, let, var; JavaScript variables and immutability"
published: true
publishedDate: "2020-08-01T22:12:03.284Z"
posttags: ["javascript","webdev","beginners","codenewbie"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
---

The release of ES2015 in 2015 introduced two new keywords, `let` and `const`, which are important [block-scoped](https://en.wikipedia.org/wiki/Scope_(computer_science)) variables in JavaScript. Until that point, for close to two decades, a variable was declared in JavaScript by using the `var` keyword.

```javascript
var message = "Hello, world!"
```

### So, what's the difference?
The three keywords together provide the same fundamental functionality, but differ in the way that they provide it. `var` and `let` are __reassignable__ values, while `const` has limited *mutability*. 

`var` and `let` can be reassigned - which is the act of setting a value at one point in time, and then using the same variable reference and giving it a new value.

```javascript
var fruit = "Apple";
// ... do something
if (foo === 1) {
  fruit = "Orange";
}
```

The same can be achieved with `let`:
```javascript
let fruit = "Apple";
// ... do something
if (foo === 1) {
  fruit = "Orange";
}
```

However, `const` does not allow reassignment of the reference, nor does it allow the mutation of a primitive. A [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) is a one of six types; a string, boolean, number, bigint, undefined and symbol, while `null` is a special type of object.

All primitives are **immutable**, meaning that their values cannot be changed, but they can be assigned a new value. This is different to stricter and strongly typed languages, where a primitive can mutable because of the way the language works.

Variable mutation through reassignment:
```javascript
const foo = "Bar";
foo = "something else";
```

You can however, mutate an object that declared as a `const`:

```javascript
const foo = [];
foo.push("Apple");
foo.push("Orange");
// Foo is now [ "Apple", "Orange" ]
```

What you can't do, is set a new value on a previously declared `const` by **reassignment**:
```javascript
const foo = [];
const bar = {};
foo = bar;
// Uncaught TypeError: Assignment to constant variable. 
```

#### Why you shouldn't use `var`
`let`, `var` and `const` behave in the same way in scope, other than the limited mutability for `const`. It is recommended however, to make it clear as to behaviour and treatment of a given property and its value, that you declare **mutable** variables as `let` and **immutable** variables as `const`.

`var` can still be used, but the treatment around `var` is far more flexible than `let`. For example, using a `var`, you can do this:

```javascript
var x = "1";
var x = "2";
// x will have value of "2"
```

Doing the same with `let` will throw an error, indicating the the variable has already been declared within the scope of execution
```javascript
var x = "1";
var x = "2";
// Uncaught SyntaxError: Identifier 'x' has already been declared 
```

### What's the difference with variable scope?
`var` is a tricky one to deal with, because even with block-scoped execution, that is an `if`-`else` statement, a `while` loop, or anything executed between curly braces `{}`, `var` doesn't adhere to expected declaration rules, which is that anything declared in a scope, lives in that scope.

For example, this is possible, because when a `var` is declared outside of a function scope, it will mutate the parent scope, which in a lot of cases, is the window:

```javascript
if (true) {
  var t = "foo";
}

console.log(window.t);
// Prints "foo" to the console
```

By using `var` inside of a function, the declaration is block limited:
```javascript
function foo() {
  var fooT = "foo";
}

foo();
console.log(window.fooT);
// prints "undefined" to the console
```

This is where `let` and `const` come in, because they are correctly block scoped, thereby adhering to the rules of declaration within a function scope, conditional block scope or loop scope. 

Importantly, they also _don't_ modify the parent scope:
```javascript
let fooBar = "foo";
console.log(window.fooBar);
// prints "undefined" to the console
```

### What about using `var` or `let` in a for loop?
There are multiple ways to iterate through a collection of objects in JavaScript, with while and [for](https://www.w3schools.com/js/js_loop_for.asp) being to primary ways.

Below are several ways to iterate through an array collection using `for`

```javascript
// for: i is the index
for (let i = 0; i < collection.length; i++) { collection[i] }
// for...in: x is the index
for (let x in collection) { collection[x] }
// for...of: x is the value
for (let x of collection) { x }
```

The benefit of using `let` in a loop, is that `let` is block-scoped to the loop itself. That is to say, that you cannot consume the declaration of `let` outside of the block that it is declared in.

```javascript
// Using let
const collection = [ "apple", "orange" ];
for (let fruit of collection) {
  console.log("I like to eat 1 " + fruit);
}
console.log(fruit);
// Uncaught ReferenceError: fruit is not defined 
```

However, when using `var`, you can still access the `fruit` variable:

```javascript
// Using let
const collection = [ "apple", "orange" ];
for (var fruit of collection) {
  console.log("I like to eat 1 " + fruit);
}
console.log(fruit);
// prints "orange" to the console
```

There are ways around this, such as dropping the declaration of `var` inside block scopes, but this opens up another entire can of worms with readability, consistency and correct block scoping. 

The bigger issue at hand, is that even when dropping `var`, `let` or `const` in a loop, the variable is automatically declared as a `var`:

```javascript
const collection = [ "apple", "orange" ];
for (var fruit of collection) {
  console.log("I like to eat 1 " + fruit);
}
console.log(fruit);
// prints "orange" to the console
```

#### I sort of understood some of those words...
To clarify the meaning of some of the words and terms used:

* mutate is to change, or modify a variable or property of an object, eg `let foo = 1; foo = 2;`
* assignment is to set a value to a variable eg `let foo = 1;`
* iterate is to traverse, or _navigate_ from top-to-bottom (left to right) of an array or collection, starting with the first element and ending in the last element
* collection is a structured object that has n elements, eg 1 or more elements, eg. `const foo = [ "apple", "orange" ];`
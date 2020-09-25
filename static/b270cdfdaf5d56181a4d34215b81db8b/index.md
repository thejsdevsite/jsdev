---
title: What is hoisting and how it works in JavaScript
date: "2020-09-25T17:56"
description: "Hoisting is a term you won't find anywhere, but it describes a mechanism in JavaScript to provide early-access to declarations."
published: true
publishedDate: "2020-09-25T17:56"
posttags: ["javascript"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: ./hero.png
---

The famed and often confusing term, certainly for any JavaScript developer, and it leaves many scratching their heads; what exactly is hoisting?

Hoisting is a term you won't find used in any pre-EMCA 2015 normative specification, but it describes a mechanism in JavaScript to provide early-access to declarations.

> Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

Ever wondered why in JavaScript you can interact with your variables and functions before they're declared? Then read on!

##### tl;dr
Conceptually speaking, hoisting is the movement of declaractions - variables and functions. - to the top of their scope, be it local inside of a function, or global, while assignments are left in place. What really happens, is that during compile time, the declarations are put into memory first, but physically remain in place in your code.

The benefit of doing this is that you get access to functions and variables _before_ they're declared in code. This often helps when designing your code. It can be cumbersome to declare all functions before you use them, because you would then need to be aware of dependencies beforeand.

```javascript
foo("bar");
function foo(bar) {
  // do something
}
```

It's important to remember that _only_ declarations are hoisted into memory during compile time, _not_ assignments.

## Only declarations are hoisted
JavaScript only hoists the declarations of functions and variables into memory during compile time, _not_ the assignments. This means that if a variable is declared and initialized after using it, the value will be `undefined`.

```javascript
console.log(foo) // prints 'undefined' as only the _declaration_ was hoisted
var foo; // declaration
foo = "bar"; // initialization
```

The following is an example of initialization returning a `ReferenceError`. In this case, a variable is only initialized, not declared; in order to declare something in JavaScript, it must be pre-appended with a [declaration keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements).

```javascript
console.log(foo); // prints 'ReferenceError: foo is not defined'
foo = "bar"; // only initialization, no declaration, value did not follow var
```

It's important to remember that only the _declaration_ is hoisted, even if a value is assigned.
```javascript
console.log(foo); // prints 'undefined'
var foo = "bar";
```

### Hoisting variables
JavaScript allows us to declare and initialize our variables simultaneously. However, the engine separates the declaration and initialization of variables, and executes it as separate steps, thus allowing the engine to hoist declarations above initializations.

All function and variable _declarations_ are hoisted to the top of their scope, while variable declarations are processed ahead of function declarations; which is why you can call functions with yet-to-be-declared variables, and get an `undefined` error.

However, there is a rather large caveat. When _initializing_ a variable, that hasn't yet been declared yet, the variable is hoisted to the global scope when it is executed, rather than hoisted to its scope, say the function it's being initialized in. This _only_ happens on execution, not at compile time.

```javascript
function doSomething() {
  doing = "something";
}

console.log(doing); // ReferenceError: doing is not defined
doSomething();
console.log(doing); // something
```

This is distinctly different to scoped variable declarations, which only exist within their scope. 

```javascript
function doSomething() {
  var doing = "something";
}

console.log(doing); // ReferenceError: doing is not defined
doSomething();
console.log(doing); // ReferenceError: doing is not defined
```

The take-away is, that _declared_ variables are hoisted to the top of their scope at **compiled time**, while _undeclared_ variables are hoised to the global scope **during execution**.

### Declarations using `let` and `const` are not hoisted to global space
`let` and `const` were introduced in ES6 for scope-based operations, but unlike `var`, do not get hoisted to global space during compile time. Variables declared with `let` are block scoped and not function scoped. This is significant, because unlike `var`, there's no risk of variable value leakage outside of the scope of execution.

The downside is that `const` and `let` do not get hoisted, in local or global scope. Read more about [var, const and let][const-var-let].

```javascript
console.log(foo); // prints 'ReferenceError: foo is not defined'
const foo = "bar";

console.log(bar); // prints 'ReferenceError: bar is not defined'
let bar = "bar";
```

### Strict mode prevents hoisting
Introduced as a utility in ES5, [strict-mode][strict-mode] is a way to _opt in_ to a restricted variant of JavaScript, implictly opting-out of [sloppy mode][sloppy-mode]. It introduces different semantics, such as eliminating some silent errors, improves some optimizations and prohibits some syntax.

One of the 

### 

[const-var-let]: https://thejs.dev/jmitchell/const-let-var-javascript-variables-and-immutability-00b
[strict-mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[sloppy-mode]: https://developer.mozilla.org/docs/Glossary/Sloppy_mode
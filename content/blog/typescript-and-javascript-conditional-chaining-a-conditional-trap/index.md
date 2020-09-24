---
title: TypeScript and JavaScript conditional chaining; a conditional trap?
date: "2020-07-29T22:12:03.284Z"
description: "TypeScript and JavaScript conditional chaining; a conditional trap?"
published: true
publishedDate: "2020-07-29T22:12:03.284Z"
posttags: ["javascript", "typescript", "functional", "tutorial"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: ./hero.jpg
---

An interesting post from Kent Dodds popped up on my twitter feed today, discussing a certain experience he had with one of the JavaScript shortcuts in a production environment, and the result not quite living up to expectation.

https://twitter.com/kentcdodds/status/1288109405188157450

While he described at length what he encountered, how he resolved it and turned it into a learning opportunity, there was an interesting discussion around optional chaining.

## What exactly is conditional chaining?
The phrase "conditional chaining" is a misnomer used to describe two features - [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and [non-null assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator) chaining. Both don't yet exist (optional does) in JavaScript, but can be provided through TypeScript (excluding known compatibility issues with different browsers).

The use of conditional chaining and non-null assertion chaining is very similar to the way that one would use conditional operators in a branching statement:

**Ternaries:**
```javascript
const fooName = bar && bar.name ? bar.name : undefined; // union, non-null assertion
const fooName = bar === null || bar === void 0 ? undefined : bar.name; // intersection, optional assertion
```

**Conditional chaining:**
```typescript
const fooName = bar!.name; // non-null assertion
const fooName = bar?.name; // optional chaining
```

## Ok, so what's optional chaining?
The optional chaining operator (`?.`) permits the deep reading of of properties located within a chain of connected objects, without having the recursively check the existence of the chain of objects before accessing to property.

Instead of causing an error when the chain encounters a `nullish` reference, the expression shortcuts to return `undefined`.

Silver bullet? Not exactly. There are still validation checks that are performed by the browser to ensure that the next chained object, or property, immediately following the optional operator exist. Otherwise you run into all sorts of `undefined` shenanigans.

Take the following code that may be written without optional chaining:

```javascript
if (foo && foo.name) {
  ...
}
if (!!foo && foo.hasOwnProperty(name)) {
  ...
}
```

Let's introduce optional chaining:
```javascript
if (foo?.name) {
  ...
}
```

Looks great does it? It's in the eye of the beholder, because with syntactic sugar like this, you still get drawbacks, such as reduced visibility of non-null assertions during property access, and return types that may be unexpected.

## Tell me about non-null assertions
Just like `&&` and `||` are inverse in conditional branching, `?.` and `!.` are inverse when traversing a chain of references. While optional chaining will return undefined or the value of the final reference, the non-null assertion is a syntactic feature of TypeScript that will assert that a property is non-null during compilation, but will not ensure that it is not non-null at runtime.

A simple example:
```typescript
// Non-null assertion (property!)
type fooBar = { name: string | null };
const foo: fooBar = {
  name: null
};

let s = foo!.name; // s has type 'string'
const p = `name: ${s}`;
console.log(p); // Will output name: null
```

## Pitfalls
It's important to note that at the time of writing, non-null assertions are still a feature of TypeScript, and optional chaining has limited browser support.

It's always better to err on the side of caution when using syntactic sugar features that aren't widely supported, even when using a superset of JavaScript such as TypeScript. Take for instance an ES3/ES5 targeted version of the `?.` operator:

```typescript
type fooBar = { name: string | null };
const foo: fooBar = {
  name: null
};

let s = foo?.name;
const p = `name: ${s}`;
console.log(p);
```

```javascript
var foo = {
    name: null
};
var s = foo === null || foo === void 0 ? void 0 : foo.name;
// var s = foo.name; with non-null assertions
var p = "name: " + s;
console.log(p); // Will output name: null
```

The only difference between optional chaining and non-null assertion chaining is that optional chaining in TypeScript will be broken out to validate the individual components, where non-null assertion chaining will remove the operators.

The compilation of optional chaining becomes a mess with TypeScript the deeper you traverse the reference tree:

```typescript
const foo: any = {}
let s = foo?.bar?.qwerty;
```

Becomes:
```javascript
var foo = {};
var s = (_a = foo === null || foo === void 0 ? void 0 : foo.bar) === null || _a === void 0 ? void 0 : _a.qwerty;
```
And so on. We can't reliably use these features natively in JavaScript yet without targeting specific versions of a given browser, but we can use the TypeScript ES target option to generate the next-best use.

## Should I use conditional chaining
This is where objective turns to subjective. First and foremost, it's syntactic sugar, a shorthand way of checking if a reference exists before accessing it, to avoid the dreaded `undefined` error:

```javascript
const foo = {};
if (foo.name) {
  ...
}
// outputs 'undefined' to the browser console
```

There's a clear, tangible and measurable benefit for using it, and a reason to use it, however one must consider the use of conditional chaining in traversing data structures, especially when the validation of references has been obfuscated, and the behaviour differs between the operators.

Non null assertion does not error out, nor is it compiled to validate the truthiness of a reference before accessing it, it simply transforms `foo!.name` into `foo.name` and if it can guess the type that it's supposed to work with at compilation type, _maybe_ return an error. All of that can be easily voided using `any` even when compiling with `--strictNullCheck`.

Optional chaining intentionally hides the reference validation from the user, and it's definitely helpful and useful. But it removes often necessary truthiness checks from code, to replace with a character that can be easily confused or missed, especially given that it's similar in appearance to a ternary operator, especially a minified instance:

```javascript
var a=_b?_b.a;undefined;
var a=b?.a;
```

It's definitely one to consider before adopting it widescale.
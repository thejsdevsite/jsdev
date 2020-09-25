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

##### tl;dr
Conceptually speaking, hoisting is the movement of declaractions - variables, functions, classes, etc. - to the top of their scope, be it local or global, while assignments are left in place. What really happens, is that during compile time, the declarations are put into memory first, but remain in place in your code.

The benefit of doing this is that you get access to functions _before_ they're declared in code. This often helps when segmenting your code base and attempting to streamline the development. It can be cumbersome to declare all functions before you use them, because you would then need to be aware of dependencies beforeand.

```javascript
foo("bar");
function foo(bar) {
  // do something
}
```
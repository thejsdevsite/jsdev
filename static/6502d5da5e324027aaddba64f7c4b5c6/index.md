---
published: true
uid: "1rb4kl77dnqc"
title: "It's time to let go of lodash"
date: "2021-02-15T23:22:48.803Z"
description: "Is lodash still required in today's JS world? It doesn't look like good for the famous tool."
posttags: ["design","functional","javascript","webdev"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: "./hero.jpg"
publishedDate: "2021-02-16T01:06:35.713Z"
---

In today's world of JavaScript, there's a huge number of tools that solve the same problem in slightly differing ways. Some of the tools are driven by simplicity, some driven by configurability, and others by extensibility. Lodash is one of those handful of libraries, that were created to solve a growing problem, that fortunately due to Microsoft's foresight, no longer exists.

I'm talking of course about Internet Explorer 11.

At the time [lodash][lodash] was created, ES6 was just a glimmer in the eye of web developers, an idea and a desire for most front end developers. In the world of Bootstrap, jQuery, underscore, prototype and a huge number of other tools, lodash provided a consistent and clear interface. Classes, functional programming, and all the goodness and richness that we take for granted was years away.

Let's jump forward to today; we're living in the days of ES11. Browsers are no longer competing on the same standard. The three most used browsers in the world use Webkit or Chromium, standards are consistent and there's very little difference in adoption and behaviour across most browsers. We don't have to tailor our JavaScript or CSS to the version of IE, or Safari, or Firefox, or even OS, because it's all a little difference.

We're now able to just do once, and it do it well. Efficiency has never been better. But that IE11 troll still lives in the cave over there, and we need to find a way to feed it, and avoid it. Fortunately, we can rely on [core js][corejs] and [babel][babel], transpilers that spit out ES5 compatible JavaScript that IE11 through to IE Edge 18 can support.

Which brings us neatly to the topic of the blog - do we need lodash anymore?

### Do we need lodash?
Transpilers, compilers and build tools try to solve the file size bundling issue in different ways, such as webpack using tree shaking to identify code that isn't used. But lodash is stubborn, it's a painful library to reduce in file size. Even using something as simple as `.get` imports a significant amount of code. Why? It depends on itself, tools within its own library. `cloneDeep` is another utility that adds a significant amount of code.

There are more than 100 utility helpers and the majority of them aren't required anymore. Babel is the industry standard for cross-compiling ES6+ code into ES5 compatible code for older browsers. In time, that won't be required with, once users on legacy browsers have been migrated off.

### Tuning your build to reduce lodash bloat
There's few options that developers have to reduce the bloat that lodash brings into your compiled build. But there are several strong options:

1. Import only the functions you need through `lodash/*` or `lodash.*`:

```javascript
const _ = require("lodash"); // typical library import that will bring in the lodash base
const get = require("lodash.get"); // import the specific tool you need, needs to be imported through package.json
const get = require("lodash/get"); // import the specific tool from the lodash base library
```

2. Replace lodash Array/Object helpers with native functions:

```javascript
const myArray = [];

// Lodash array fill 10 elements
const fill = require("lodash/fill");
fill(myArray, {foo: "bar"}, 0, 10);

// Native array fill 10 elements
myArray.fill({foo: "bar"}, 0, 10);
```

3. Assess if you really need some of those handy utility functions - do you really need a `cloneDeep` or `merge`? [Object spread operator][objectspread] can do something very similar with minimal code to merge objects. You don't even have to do `Object.assign` anymore.

```javascript
// Merging objects
const myArray = [...[1, 2]]; // [1, 2]
const myFoo = { ...{foo: "bar"}, bar: "foo"}; // {foo: "bar", bar: "foo"}
const myFoo = { foo: "bar", ...{foo: "qwerty"}}; // {foo: "qwerty"}
```

4. [Array functions][array] are supported across _all_ browsers and replicate a lot of lodash's functionality

```javascript
const myArray = [1, 2, 3];
// Map
console.log(myArray.map(val => val * 2)); // [2, 4, 6]

// Reduce
console.log(myArray.reduce((acc, val) => acc + val)); // 6

// Entries
const it = myArray.entries();
for (const entry of it) {
    console.log(entry);
    // [0, 1]
    // [1, 2]
    // [2, 3]
}

// Find
console.log(myArray.find(val => val === 3)); // 3

// Filter
console.log(myArray.filter(val => val > 1)); // [2, 3]

// Includes
console.log(myArray.includes(3)); // true

// Cast array
console.log([1]); // [1]

// Unique
console.log([...new Set([1,1,2,3])]); // [1,2,3]
```

5. Use babel or core js to compile ES6+ code into ES5 compatible code for older browsers
6. Make use of JavaScript core functionality to do type inference and checking:

```javascript
_.isArray([]); //true
Array.isArray([]); //true

_.isNull(null); //true
null === null; //true

_.isObject({}); //true
{} !== null && typeof {} === "object" && Object({}) === {}; //true

_.isBoolean(true); //true
Boolean(true); //true
```

7. Use JavaScript functions for Math and Date:

```javascript
_.now(); //1613434837495
Date.now(); //1613434837495

_.add(6, 4); //10
6 + 4; //10

_.ceil(4.1); //5
Math.ceil(4.1); //5

_.max([1,2,3]); //3
Math.max(...[1,2,3]); //3
```

8. Use JavaScript object functions:

```javascript
_.assign({a: 0}, {a: 1}, {b: 2}); //{a: 1, b: 2}
{a: 0, ...{a: 1}, ...{b: 2}}; //{a: 1, b: 2}

_.omit({a: 0, b: 1}, ["a"]); //{b: 1}
const {a, ...obj} = {a: 0, b: 1}; //a=0, {b: 1}

_.pick({a: 0, b: 1, c: 2}, ["a", "c"]); //{a: 0, c: 2}
const {b, ...obj} = {a: 0, b: 1, c: 2}; //b=1, {a: 0, c: 2}
```

9. Use JavaScript collection commands:

```javascript
_.forEach([1, 2], val => {});
[1,2].forEach(val => {});

_.find([1, 2], val => {});
[1,2].find(val => {});

_.filter([1,2], val => {});
[1,2].filter(val => {});

// Partition
_.partition([{foo: "bar", active: true},{foo: "foo", active: false}], val => val.active); 
// objects for [["bar"],["foo"]]

const partition = [];
[{foo: "bar", active: true},{foo: "foo", active: false}]
    .forEach(val => {
        if (!Array.isArray(partition[Number(!!val.active)])) partition[Number(!!val.active)] = [];
        partition[Number(!!val.active)].push(val);
    });
// objects for [["bar"],["foo]]
```

### Summary
Do we need lodash today? Not really, no. Core JS and Babel do a fantastic job in compiling ES6+ code to ES5 compatible code. A _lot_ of the cross-browser compatible functionality that lodash offers is now easily replicatable in the browser natively. There are lightweight options for merge and cloneDeep, and even native ways of doing cloneDeep, as long as the structure doesn't include functions, such as using `JSON.parse(JSON.stringify(original))`.

Specific functionality can be brought in on a needs-basis, but other functionality, such as `get` can easily be created to be project and application specific.

While lodash offeres a tremendous library of functionality, much of it is no longer required, and the cost of importing lodash into your application can be huge, well over 600kb if your compiler doesn't shake the unrequired code, or you use lodash throughout your application.

Pre ES6, lodash was an absolute gem, just like jQuery was back in its day, providing rich cross-browser functionality. These days, all the browsers treat JavaScript standards fundamentally the same, with very little difference. 

The days of JScript, Trident and Chakra are long gone, let's not continue to use tools from those days, go native!

[lodash]: https://en.wikipedia.org/wiki/Lodash
[corejs]: https://github.com/zloirock/core-js
[babel]: https://babeljs.io/
[objectspread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
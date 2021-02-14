---
uid: h4jkl4k2uqq
title: Code coverage testing, when enough is enough
date: "2021-02-14T03:42:37.000Z"
description: "When we go too far with code coverage, where do we draw the line and how can we improve our testing"
published: true
publishedDate: "2021-02-14T04:46:37.000Z"
posttags: ["javascript","webdev","testing","react"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: "./hero.jpg"
---

Coverage testing in application development is often a touch, challenging, hugely complex and often thankless task, and just one of a myriad of testing tools available to developers.

Designing your application architecture in advance, providing the right tools, knowledge, training and education to your team of developers, and following the best programming principles helps developers achieve what is the ultimate goal in code testing - 100% coverage.

For the majority of projects that developers work on, code coverage is one of those increasingly difficult and time consuming daily tasks. There are many ways to cheat 100% coverage testing, such as using Snapshot testing in React, but it doesn't really get you there, nor does it achieve what code coverage is meant to achieve. Let's dig into that shall we!

### What's the difference between white box and black box testing?
White box testing is a technique that is used to validate the internal structure of the code, the design, input-output flow, decisions, error handling and more. This is otherwise known as open box testing; the code is open, transparent and accessible. Parts or all of the application can be tested, with resources, classes and functions stubbed and mocked.

This is typically compromised of unit tests, and can be created using a mix of test drive development (TDD) or business driven development (BDD) tools, or plain old writing tests as you go.

Black box testing on the other hand is testing the application as unit. Unlike white box testing where the source code is accessible and transparent, in black box testing, you are testing the inputs and outputs against the entire application. This is what E2E, user story and automated environment integration tests normally focus on; testing all of the application at once.

### Unit tests and code coverage
Code coverage is a manner by evaluating the source code execution against a suite of tests. This can be extrapolated from any number of black box testing, and it's even possible to extract from white box testing. For the sake of simplicity, we'll refer to coverage testing as the side effect of unit testing - this is the most common testing tool used to generate code coverage.

When a test is executed, tools scan the output of the test, the code itself and other software registers that tracks software flow. The coverage report that is generated, indicates what part of the source code has been executed and what has not been executed. The report that is generated can indicate flow issues and decision issues that the code has, and how frequently a sequence of code, function or conditional block was executed.

### Limitations on code coverage
The purpose of software testing is to validate the software and provide information about the quality of the software. What sort of tests, how tests should be created, and what they should test, is a never ending discussion between testers. Some believe that you should test the source code itself, others believe that you should only test for user behaviours. But what if the source code you write doesn't matche either scenario?

Ideally tests should reflect application flow, logic and where possible, behaviours. This leaves us in a bind if our logic is inherently complex, or a considerable amount of logic is abstracted with reduced application visibility. 

How exactly do we test protected and private methods - should we even attempt to do that? How do we validate user input changes in JavaScript in an Angular or React application, should we load the entire eco system and validate the HTML? But wait, isn't that something we can and should be validating with Cypress as a white box test?

This is the how, what, where and why of testing. If your test cases follow your code, you're likely to run into this issue. If your test cases preceed your code, you're more than likely writing tests to validate behaviour, rather than logic. It's a delicate balancing act, and quite difficult to solve, and will require a lot of trial and error.

### Ok, so what's wrong about coverage testing?

Which brings us neatly to coverage testing. Rigorous discipline is often required with testing to extract the best possible result from testing itself, especially coverage testing. The only problem is that test code is as likely to be as buggy as the software code itself.

Given a boolean for example, to ensure coverage for both states of the property, `true` and `false`, at least two different tests are required. This is a combinatorial problem; for each decision that is required, at least 3-5 lines of code are required to write and validate the test. This takes time to validate just one property.

```typescript
// Code
let counter = 1;
function foo(state: boolean): void {
    if (state) {
        counter++;
    } else {
        counter--;
    }
}

// Test
it("should increment counter by 1 when state is true", () => {
    expect(counter).toBe(1);
    foo(true);
    expect(counter).toBe(2);
});

it("should decrement counter by 1 when state is false", () => {
    expect(counter).toBe(1);
    foo(false);
    expect(counter).toBe(0);
})
```

What about validating conditional statements and branches? The same holds true, for each possible decision, a test is required. The complexity and amount of code required is an exponential growth for each additional decision branch, especially if ternary operators are used, or in the case of Javascript, null-coalesce and optional chaining.

```typescript
const state: {string: any} = {};
function foo(state?: boolean): undefined | string {
    let bar = state ? "bar" : "foo";
    if (state) {
        state.foo = 1;
    }

    return state?.bar?.foo;
}

it("should return undefined for foo with false", () => {
    expect(foo(false)).toBeUndefined();
})

it("should return undefined for foo with false if state.bar has data", () => {
    state.bar = {};
    expect(foo(false)).toBeUndefined();
})

it("should return string for foo with false when state.bar.foo has value", () => {
    state.bar.foo = "somestring";
    expect(foo(false)).toBe("somestring");
})
// etc
```

Our example above is not an uncommon example of combining conditional statements with ternary operators and optional chaining in the same function. It's so common in fact, that you'll see a combination of all three in the majority of React tutorials, especially ternary operators for conditional rendering. All that our three tests have validated is that the optional chain can be executed with three different states.

### Ways to improve code coverage
What should we do when our code makes use of the latest and greatest in Javascript browser functionality? Should we ditch ternary operators, null coalesce and optional chaining? Not exactly. It's not uncommon to see an optional chain that looks like the following, and there are strategies to mitigate the impact this has, not just on code coverage, but testing in general.

```typescript
const something: string | undefined = myvar?.has?.a?.very?.deep?.nested?.structure;
```

#### Optional chaining
What strategy do we use for testing the above example? while it looks like it might return either string or undefined, there are 8 possible values that can be assigned to `something` - 7 `undefined` and 1 `string` value. Do we test every branch of the statement, or can we test the assignment as a whole? The answer is yes, we can reduce our testing effort by extrapolating the lookup and assignment into a single function call.

```typescript
const get = <T>(key: string, val: any, default?: undefined): T {
    // Get is a recursive lookup function, split the key into tokens, take the first token
    // look up val object for key, return get(keys.join("."), val[key]);

    const keys = key.contains(".") ? key.split(".") : [ key ];
    const tKey = keys[0];
    if (tKey in val) {
        return get(keys.join("."), val[tKey], default)
    } else {
        return default;
    }
}

const something: string | undefined = get("has.a.very.deep.nested.structure", myvar);
```

Our tests have been greatly simplified to testing the assignment, no longer validating the various branches of assignment based on the existence of a complete structure.

```typescript
const myvar = {};
const something: string | undefined = get("has.a.very.deep.nested.structure", myvar);

it("should return value if structure exists in nested", () => {
    myvar.has.a.very.deep.nested = { structure: "foo" }
    expect(something).toBe("foo");
});

it("should return undefined if cannot find value", () => {
    expect(something).toBeUndefined();
})
```

Under the hood, the optional chaining is comparatively the same as looking up a deeply-nested subproperty using conditional assignment with double ampersands `&&`:

```javascript
const foo = { bar: "bar" }
const bar = foo && foo.bar;
// bar is "bar";
const buzz = foo && foo.buzz;
// buzz is undefined

// Is the same as:
const foo = foo?.bar;
const buzz = foo?.buzz;
```

#### Nested ternary operators
This can be a tough one, especially when nested ternary operators are used to simplify conditional logic, shorten code and remove nested if-else blocks and switch statements. With the reduction in code comes the increase in complexity and vast increase in testing effort. With a single ternary operator, there are two possible outcomes. Each nested ternary operator adds an additional outcome. These are all registered as branches and must be validated through unit tests.

For something that saves lines of code, the testing effort is disproportionally huge.

```typescript
function foo(foo): string {
    return foo
    ? bar
    : (somethingElse ? bizz : fuzz)
}

it("should return bar", () => {
    expect(foo(foo)).toBe(bar);
});

it("should return bizz", () => {
    expect(foo(bizz)).toBe(fizz);
});

it("should return fuzz", () => {
    expect(foo(buzz)).toBe(buzz);
});
```

This doesn't even account for using ternary operators to set values, that are then used in conditional logic in the same block of code.

#### Testing private/protected methods
Depending on the philosophy of testing that you, or your team or project is following, private and protected methods may not just be off limits, but sacrosanct, completely off limits for testing. There are ways around this, such as fudging or brute forcing variables, using code introspection to know more about what you're testing, then reflection to modify the visible of certain functions, classes and methods.

If this is what you have to do to pass a test, then it's what you have to do. It often does lead to breaking tests as soon as there's a refactor, which may or may not be acceptable.

Take for example the following class, what should we test, and how do we validate our non-visible properties and methods? How do we get 100% test coverage?

```typescript
class Foo {

    protected state?: string;

    public doSomethingFn(foo: boolean): void {
        this.someFn(foo);
    }

    protected someFn(foo: boolean): void {
        if (foo) {
            someFn2(foo);
        }
    }

    protected someFn2(foo: boolean): void {
        this.state = !!existingState
            ? "Oranges"
            : foo ? "Apples" : "Bananas";
    }
}
```

100% test coverage for `Foo` is going to be very difficult to test - why? 

1. We can't validate `state` - ever, unless we manipulate the class and expose `state`.
2. `someFn` and `someFn2` are protected methods, that can only be validated by calling the public `doSomethingFn`
3. The assignment of `this.state` includes conditional logic

Without manipulating the class and using reflection to change visibility, we can only execute these tests:

```typescript
const foo = new Foo();

it("should accept true for doSomethingFn", () => {
    expect(foo.doSomethingFn(true)).not.toThrowException(Exception.any());
});

it("should accept false for doSomethingFn", () => {
    expect(foo.doSomethingFn(false)).not.toThrowException(Exception.any());
})
```

These tests are fundamentally worthless; they tell us nothing of the inner working of the class, they only validate the input of a single function, don't indicate the altered state, nor any mutating logic being applied to the state. The next developer will likely look at that in a confused state and wonder why those tests exist.

#### Refactoring
When you're stuck writing tests like those above, it's time to look at the code in a new light and consider refactoring as a solution. As was discussed earlier, unit tests ensure that the section of applicaiton under test meets its design and functions as expected. We're unable to identify the design, purpose or function of class `Foo`, so lets redesign it so that it makes more sense, and we can test the "units" (the section of application) in isolation.

```typescript
interface Store {
    get: (key: string) => any;
    set: (key: string, value: any) => void;
    emit: (key: string, value: any) => void;
    subscribe: (event: any) => any;
}

class Foo {

    protected store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    public doSomethingFn(foo: boolean): void {
        this.someFn(foo);
    }

    protected someFn(foo: boolean): void {
        if (foo) {
            someFn2(foo);
        }
    }

    protected someFn2(foo: boolean): void {
        const existingState = this.state.get("foo");
        const state = !!existingState
            ? "Oranges"
            : foo ? "Apples" : "Bananas";
        
        this.store.set("foo", state);
    }
}
```

We've separated state object from the class `Foo`, creating it as an independent container that can be validated and tested in isolation. We can also mock it and spy on specific function calls. We can also validate end-to-end that calling `doSomethingFn` that state will definitely be set, by reading the code. We can now validate the functionality of the code with the following tests:

```typescript
let state: State;
let foo: Foo;

beforeEach(() => {
    state = new State();
    foo = new Foo();
});

it("should call state.get when doSomethingFn is called with true", () => {
    spyOn(state, "get").and.returnValue(undefined);
    foo.doSomethingFn(true);
    expect(state.get).toHaveBeenCalledTimes(1);
})

it("should call state.set when doSomethingFn is called with true", () => {
    spyOn(state, "set");
    foo.doSomethingFn(true);
    expect(state.set).toHaveBeenLastCalledWith("Apples");
})

it("should not call state.get or state.set when doSomethingFn is called with false", () => {
    spyOn(state, "get");
    spyOn(state, "set");
    foo.doSomethingFn(false);
    expect(state.get).not.toHaveBeenCalled();
    expect(state.set).not.toHaveBeenCalled();
})

it("should set state as Apples when doSomethingFn is called with true", () => {
    spyOn(state, "set");

    foo.doSomethingFn(true);
    expect(state.set).toHaveBeenLastCalledWith(["foo", "Apples"]);
})

it("should set state as Oranges when doSomethingFn is called with true twice", () => {
    spyOn(state, "set");

    foo.doSomethingFn(true);
    foo.doSomethingFn(false);
    foo.doSomethingFn(true);
    expect(state.set).toHaveBeenLastCalledWith(["foo", "Oranges"]);
})
```

### Conclusion
Coverage testing is a powerful tool that should be used to indicate strengths, weaknesses, overuse, underuse and complexity of your code. Just like any tool, it can only go far and has significant limitations, especially when it can be impossible to evaluate every path, function, and property.

While it may not be possible to reduce or remove all branches from your code, there are strategies to mitigate the impact they have, especially when using syntactic sugar like null-coalesce, ternary operators and optional chaining.

Code coverage shouldn't be used as the ultimate tool; it should be used as a reflection of the testing effort and how well validated the application code is. As we've seen from our examples above, there can be as much as 2x-to-3x code to validate functionality with tests, than writing it. When aiming for 100% code coverage on poorly designed or implemented code - that is application logic riddled with branches and paths, it may prove to be impossible, or at least require something closer to 10x code to validate.

Unit tests aren't perfect, they've been written by humans, and are as strong as the developer who wrote them. They often break, can be a nightmare to fix, and are often discarded when newer code is created. Stick to the testing plan, be disciplined and set the expectations for the code coverage report.
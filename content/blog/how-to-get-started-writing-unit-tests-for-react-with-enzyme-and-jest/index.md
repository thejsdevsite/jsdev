---
uid: 1fbkfq6nmfw
title: How to get started writing unit tests for React with jest and enzyme
date: "2020-10-01T12:12:00"
description: "Getting started with React testing using the Airbnb Enzyme testing library"
published: true
publishedDate: "2020-10-03T08:50:00"
posttags: ["javascript","tutorial","react","testing"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: "./hero.png"
---

Testing in React can often be a challenge for developers. There are plenty of options and libraries to choose from, some more difficult to use than others. Some of that is down to the complexity or syntax of the testing frameworks, while React introduces plenty of its own issues that can be difficult to deal with, such as testing hooks and deferred actions.

This tutorial article assumes that you have basic knowledge of testing methodologies, either using [jest][jest], [jasmine][jasmine] or other libraries, and you are familiar with the `describe`, `it`, `before*`, `after*` syntax.

#### React and jest

[Jest][jest] with snapshops is the React recommended way of working, but they also suggest that you look at trying out [React testing library][react-testing-library]. There's the old-school way of testing, pre-jest, which is to invoke events on elements wrapped in `act()` and then asserting changes to the dom. We won't be advocating that approach in this post.

JavaScript testing libraries [jasmine][jasmine], [chai][chai], [sinon][sinon] and [mocha][mocha] have shaped the way that developers write their tests, with simple to understand syntax, assertable states, mocks, spies and more. [Jest][jest] and [Enzyme][enzyme] are relative newcomers to the testing world, but bring along the same ideas that have worked so well in the past, while introducing a few new ideas of their own.

Jest is a JavaScript testing utility built for JavaScript by Facebook, primarily to support the testing effort in their React framework. It uses the concepts introduced from chai, sinon, mocha, jasmine and other libraries, even using them underneath to drive assertions, mocks and spies, to create a developer-friendly testing environment. With its simplistic approach to testing and very easy integration into React, it has become the preferred testing library for React applications.

#### Where enzyme fits in

Not every testing library is created equally though, and there is significant complexity within React applications that are just too difficult to test easily with jest. This is where Enzyme bridges the gap, as an alternative JavaScript testing utility for React, developed by Airbnb. The library aims to make testing your components easier, by allowing the developer to manipulate, traverse and simulate runtime events, and work with the results. In practice, it works better than it does on paper. 

Enzyme currently (at the time of writing this article) has adapters that will work with React versions `16.x`, `15.x`, `0.14.x` and `0.13.x`. The only thing the user needs to do is install the plugin using their preferred package manager, and configure the adapter in the Enzyme runtime environment.

The difference between `react-testing-library` and `enzyme` is that enzyme isn't designed to override the testing environment, it's a tool that you can use alongside jest. React testing library can serve the same purpose, but it also provides functionality to fundamentally alter the testing runtime environment.

## Getting started
Code: [Step 1 - Adding jest][1-jest].

For this tutorial, we'll be using a repository that I have created, with a basic component input form element and a rendered element for the output. As we progress through this post, I will share links with more completed code. So let's check out the code and get cracking!

This is our basic form that we will be testing:

![Our test example](./input-field.gif)

## Installing enzyme
Code: [Step 2 - Installing and configuring enzyme][2-adding-enzyme].

The process of installing [enzyme][enzyme] is straight forward and has the following steps:

* Install the library through your preferred package manager.
* Configure an enzyme adapter
* Configure jest to use enzyme
* Test!

This is the current adapter to react version mapping. Depending on the version of React that your project uses, you will need to install one of these adapters ([full list of adapters and compatibility][enzyme-installation]).

| Adapter package | React semver version |
| --- | --- |
`enzyme-adapter-react-16` | `^16.4.0-0`
`enzyme-adapter-react-16.3` | `~16.3.0-0`
`enzyme-adapter-react-16.2` |	`~16.2`

To get started with enzyme, we simply install it into our project, along with the required adapter:

```bash
npm i --save-dev enzyme enzyme-adapter-react-16
```

##### Configuring the adapter
Once enzyme has been installed, we need to configure enzyme to use the adapter you want to use for the version of React that you have. To do this, you can use the top-level `Enzyme.Configure()` API:

```javascript
// enzyme.setup.js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

##### Adding to jest
To be able to use enzyme tests with jest, we need to do an additional installation and configuration step, adding [jest-enzyme][jest-enzyme] and configuring it with jest.

```bash
npm i --save-dev jest-enzyme
```

If you don't already have a `jest.config.js` file, create it by copying the [jest.config.js in the repository][jest-cfg].

We need to add the enzyme configuration script to the `jest.config.js` file:

```javascript
module.exports = {
  ...
  setupFiles: [ "<rootDir>/enzyme.setup.js" ]
}
```

Now that we've got enzyme added, let's get cracking with tests!

#### Crash course on enzyme
The one major benefit that enzyme has over `jest` and `react-testing-library` is the way that you can test the rendering and interactivity of components, through the use of helper methods `shallow`, `mount` and `render`.

##### Shallow rendering with `shallow()`
[Shallow rendering][api-shallow] is an extremely useful tool, as it constrains you to testing the component as a unit, without worrying about inadvertently testing and asserting the behaviour of child elements, hooks and other functionality.

The `shallow` API does call React lifecycle methods such as `componentDidMount` and `componentDidUpdate`.

##### Full DOM rendering with `mount()`
[Mounting a component][api-mount] is equivalent to `render()` in react-testing-library; it performs a full dom render. This is ideal for use cases where you have components that may interact with an API, have deferred actions, interact with hooks, or are wrapped in higher order components.

Unlike shallow or static rendering, `mount` actually mounts the component in the DOM, which means tests can affect each other if they're using the same DOM.

##### Static rendering a component with `render()`
[Static rendering][api-render] utilises the `render()` function to generate HTML from your React tree, to compare and analyze the results. The wrapper returned is similar to `mount` and `shallow`, however `render` uses the thirdparty lib `cheerio` to do the traversing and parsing.

##### React hooks support
[Enzyme supports React hooks][api-hooks] with some limitations in `shallow`, due to the React renderer. The following hooks _do not_ behave as expected when using `shallow`:

* `useEffect()` and `useLayoutEffect()` doesn't get called
* `useCallback()` doesn't memoize callback

## Writing enzyme tests
Code: [Step 3 - Writing enzyme tests][3-writing-enzyme].

Our app structure is made up of a single component `Name`, with a test file `name.test.js`. The first test that we're going to write will make use of enzym's `shallow()` renderer, which can work with hooks like `useReducer()` and `useState()`, which are vital for [functional components][func-components].

#### Writing our first test
In this test, we're going to confirm that the component renders with an empty name by adding tests to the Name test suite file: `<root>/src/components/name/name.test.js`.

Tests already exist in this file, so we can go ahead and delete those, leaving us with a single `describe`:

```javascript
describe("Component: Name", () => {
});
```

We need to set up the fixtures in our new test suite first, so that we write less boiler plate for each test. Add the following inside the `Component: Name` test suite:

```javascript
let component = null;

beforeEach(() => {
  component = shallow(<Name />);
})

afterEach(() => {
  component = null;
});
```

Now that we've got our fixture set up, let's assert that the component shallow renders correctly using the `exists()` utility function:

```javascript
it("should render component", () => {
  expect(component.exists("form")).toBe(true);
})
```

The [shallow api][api-shallow] provides us with useful helper functions that allow us to query the rendered DOM in a jQuery-like way. We can query on direct references of the component, an id, a class, an element, and even more complex query strings.

`shallow` also provides additional functionality in the `ShallowWrapper` API to check elements at node positions, if they exist, if they're visible and more.

#### Asserting default states
It's always prudent to assert the default rendered state of a component, given certain inputs. There are times when a component can be in a state of flux, given asynchronous and deferred actions, such as with the `useEffect` hook, but we still need to test those initial, indeterminate and final states.

Let's add an additional test and validate that our `Name` component renders as expected without state with the `text()` utility function.

```javascript
it("should render default state", () => {
  expect(component.exists("#output")).toBe(true);
  expect(component.find("#output").text()).toBe("Hello, ");
});
```

#### Asserting name is displayed after entry
Now it's time to simulate user interactions and the reflection of those interactions on our UI. Enzyme provides a useful utility function with the `shallow` renderer to achieve that, by using `simulate()`.

Simulate allows the user to trigger an event on the current node. Let's add our test to make sure our name is displayed when we enter it.

```javascript
it("should display name when user types into input field", () => {
  component.find("input#name").simulate("change", { target: { value: "Charles" } });
  expect(component.find("#output").text()).toBe("Hello, Charles");
});
```

### Shallow rendering with children components
Code: [Stage 4 - Shallow rendering with child nodes][4-child-nodes]

The idea of shallow rendering is the render only the component you need, but there are times when that's just not possible, such as when components have dependencies on shared libraries or shared resources. Other times, you may need to verify how a component behaves when a different theme or language is applied, and these changes are typically applied with the Context API.

In the next test, we're going to test rendering child nodes within the parent node.

First of all, let's create a new render component `NameRenderer`:

```javascript
//<root>/src/components/name/nameRenderer.js
import React from "react";

export const NameRenderer = ({ name }) => <div role="output" id="output">Hello, {name}</div>;
```

Running our test suite should result in two failures:
```
✓ should render component
✕ should render default state
✕ should display name when user types into input field
```

This is because we are asserting on the element `<div#output>` which no longer exists in this component, but is rendered in another component. This is the side effect of using `shallow` - it only renders the nodes within the _current_ component.

Using the _extremely_ helpful `.debug()` utility function (also available with `mount`), we can see that the `<div>` has been replaced with the `NameRenderer` component:

```html
<Fragment>
  <form autoComplete="off">
    <input type="hidden" autoComplete="false" />
    <label htmlFor="name">
      Name:
    </label>
    <input aria-label="name-input" type="text" id="name" name="name" value="" onChange={[Function: handleChange]} />
  </form>
  <NameRenderer name="" />
</Fragment>
```

Enzyme provides us with the `dive()` utility on the `ShallowWrapper` API, which allows us to render child nodes one at a time. Be careful though, because this can, _and does_ trigger effects, lifecycle events and other deferred and asynchronous actions contained within that component. By using _dive_, you're also expanding the boundary of what a component unit test is as well.

Let's update our first broken test, `should render default state`, by implementing the `dive()` function.

```javascript
//<root>/src/components/name/name.test.js
it("should render default state", () => {
  expect(component.exists(NameRenderer)).toBe(true);
  expect(component.find(NameRenderer).dive().find("#output").text()).toBe("Hello, ");
});
```

Running our test suite, we get:

```
✓ should render component
✓ should render default state
✕ should display name when user types into input field
```

Success! Let's update the last test case, which checks that the output is rendered:

```javascript
//<root>/src/components/name/name.test.js
it("should display name when user types into input field", () => {
  component.find("input#name").simulate("change", { target: { value: "Charles" } });
  expect(component.find(NameRenderer).dive().find("#output").text()).toBe("Hello, Charles");
});
```

Let's check again with `npm t`...

```
✓ should render component
✓ should render default state
✓ should display name when user types into input field
```

Great, success! In this limited case, we have introduced a new component and tested that props are successfully passed to the component and rendered on the virtual dom.

### Testing nested nodes in shallow should be avoided
Code: [Stage 5 - Updating the enzyme tests][5-updating-tests].

We have a fundamental issue with our tests at this point, which breaks the concept of unit testing. [Unit tests][unit-test] are intended to test indivdual units of source code with minimal integration where possible. In our example, we're testing our `Name` component, but also the integration to `NameRenderer` and that `NameRenderer` renders correctly!

Let's fix up that up, by creating a a test suite for `NameRenderer` and adjusting the unit tests in `Name`.

Let's create our `nameRenderer.test.js` file, with our fixtures set up:

```javascript
// <root>/src/components/name/nameRenderer.test.js
import { NameRenderer } from "./nameRenderer";
import React from "react";
import { shallow } from "enzyme";

describe("Component: NameRenderer", () => {

  let component = null;

  beforeEach(() => {
    component = shallow(<NameRenderer />);
  })

  afterEach(() => {
    component = null;
  });

});
```

Even though our `NameRenderer` components takes a `{ name: string }` prop, we haven't defined it here, because we can use the `.setProps()` utility function to update the value, and simulate the input value changing.

First, we'll remove the default value assertion from the `name.test.js` test suite, and create a new default value assertion in `nameRenderer.test.js` test suite, querying the element with the id `#output`:

```javascript
// <root>/src/components/name/nameRenderer.test.js
it("should not render name", () => {
  expect(component.find("#output").text()).toBe("Hello, ");
});
```

To simulate input props on a component changing, we can use the `setProps` function, and pass through a new value for `name`. Let's add that to our test and validate the state of the component changes with the new value:

```javascript
// <root>/src/components/name/nameRenderer.test.js
it("should render name from prop", () => {
  component.setProps({ name: "Charles" });
  expect(component.find("#output").text()).toBe("Hello, Charles");
});
```

Running our tests with `npm t` should give us 4 passing tests:

```
PASS  src/components/name/nameRenderer.test.js
  Component: NameRenderer
    ✓ should not render name
    ✓ should render name from prop

 PASS  src/components/name/name.test.js
  Component: Name
    ✓ should render component
    ✓ should display name when user types into input field
```

Great success, but we still have the lingering issue of testing the `NameRenderer` component in the `name.test.js` test suite. Lets update that now. We don't need to validate the text changing in the component, we just need to validate that the properties on the child component change.

We can do that by using the `.props()` utility function and validating the value of the props. When we use `.props()`, it returns an object key/value map of all the properties passed to the component. Thus, in our test, it returns `{ name: 'Charles' }`;

Lets update our test and assert with props:

```javascript
// <root>/src/components/name/name.test.js
it("should display name when user types into input field", () => {
  component.find("input#name").simulate("change", { target: { value: "Charles" } });
  expect(component.find(NameRenderer).props()).toStrictEqual({name: "Charles"});
});
```

We've updated our test suites to remove duplicated test efforts, and we've create tests against our renderer component. Let's look at using `mount` to work with React hooks.

### Testing hooks with `mount`

Code: [Stage 6 - Testing hooks with `mount`][6-testing-hooks].

Testing hooks in React can be done in multiple ways; using `act()` to perform synchronous updates to the dom for rendered elements with `ReactDOM`, use the hook testing functions from `react-testing-library`, or use `mount()` with enzyme. Let's look at how we do it with enzyme.

While there are limitations for what we can achieve for hook testing with `shallow`, those limitations don't exist with `mount`. But be aware that deferred and asynchronous actions _do_ update the dom, and can report errors, and while you don't necessarily have to deal with asynchronous errors, you _should_ handle them, as jest _does not_ report failed async promises as errors, if you don't handle it correctly.

Let's create our component that will talk to the [json placeholder api][json-ph], and update the component when the asynchronous request from the `useEffect` hook is successful.

```javascript
// <root>/src/components/todo/todo.js
import React, { useEffect, useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState(undefined);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => response.json())
      .then(json => setTodo(json));
  }, []);

  return todo 
    ? <div id="todo">{todo.id}: {todo.title}{todo.completed ? " [completed]" : null}</div>
    : <div id="todo">Loading...</div>;
}
```

Because we're using the browser built in `fetch` library, we're going to have to mock it. We won't initialise the component in our `beforeEach` because we need to wrap the asynchronous calls in `act` to ensure that the react lifecycle events and hooks are correctly called.

```javascript
// <root>/src/components/todo/todo.test.js
let data = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
};

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    data,
    json: () => data
  }));
});
```

Whenever we test a mounted component, especially one with deferred and asynchronous actions that can update the UI, we need to wrap the test in `act`:

```javascript
// <root>/src/components/todo/todo.test.js
import { act } from 'react-dom/test-utils';
...
await act(async () => {
  component = await mount(<Todo />);
});
```

Deferred actions within the `act` will be executed, and the UI will be updated, but there may be times when additional deferred and asynchronous actions are executed, and the component may need to be 'refreshed'. We can update the component using the `.update()` utility function.

```javascript
// <root>/src/components/todo/todo.test.js
await act(async () => {
  component = await mount(<Todo />);
  component.update();
});
```

Let's put it all together now, adding tests to ensure the element exists, the element renders, and `fetch` is called with the todo api - you _don't_ need to be connected to the internet for the tests to pass. As you can see below, our assertions are the same between `shallow` and `mount`, with the primary difference being that deferred and asynchronous actions are automatically called, along with other components rendering.

```javascript
it("should render element 'todo'", async () => {
  await act(async () => {
    component = await mount(<Todo />);
  });
  expect(component.exists("#todo")).toBe(true);
});

it("should show todo once async resolves", async () => {
  await act(async () => {
    component = await mount(<Todo />);
    component.update();
  });
  expect(component.find("#todo").text()).toBe("1: delectus aut autem");
})

it("should call fetch", async () => {
  await act(async () => {
    component = await mount(<Todo />);
    component.update();
  });

  expect(global.fetch).toHaveBeenLastCalledWith("https://jsonplaceholder.typicode.com/todos/1");
})
```

When we run our `npm t` we should see green across the board:

```
 PASS  src/components/name/nameRenderer.test.js
  Component: NameRenderer
    ✓ should not render name
    ✓ should render name from prop

 PASS  src/components/name/name.test.js
  Component: Name
    ✓ should render component
    ✓ should display name when user types into input field

 PASS  src/components/todo/todo.test.js
  Component: Todo
    ✓ should render element 'todo'
    ✓ should show todo once async resolves
    ✓ should call fetch
```

Great success!

## Summary

We've looked at use cases for `shadow` and `mount`, covered the differences between the two testing methods, and demonstrated the ability for `mount` to execute `useEffect` hooks, that update the UI.

Enzyme can do more a heck of a lot more than what we've covered. Its rich querying syntax allows for deep component comparison and testing, which far and away exceeds the what the next best tools can offer.

When used alongside `jest`, enzyme is a terrific tool that makes testing components a breeze, and takes the genuine pain out of the equation. When testing React-specific functionality (did `useEffect` get called? 🤔), just remember to test the outcome, not the React action itself.

[jest]: https://jestjs.io/docs/en/tutorial-react
[react-testing-library]: https://testing-library.com/docs/dom-testing-library/example-intro
[enzyme]: https://enzymejs.github.io/enzyme/
[enzyme-installation]: https://enzymejs.github.io/enzyme/#installation
[jasmine]: https://jasmine.github.io/
[chai]: https://www.chaijs.com/
[mocha]: https://mochajs.org/
[sinon]: https://sinonjs.org/
[repo-master]: https://github.com/jmitchell38488/basic-enzyme-react-test
[jest-enzyme]: https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
[jest-cfg]: https://github.com/jmitchell38488/basic-enzyme-react-test/blob/master/jest.config.js
[api-shallow]: https://enzymejs.github.io/enzyme/docs/api/shallow.html
[api-mount]: https://enzymejs.github.io/enzyme/docs/api/mount.html
[api-render]: https://enzymejs.github.io/enzyme/docs/api/render.html
[api-hooks]: https://enzymejs.github.io/enzyme/#react-hooks-support
[1-jest]: https://github.com/jmitchell38488/basic-enzyme-react-test/tree/1-jest
[2-adding-enzyme]: https://github.com/jmitchell38488/basic-enzyme-react-test/tree/2-adding-enzyme
[3-writing-enzyme]: https://github.com/jmitchell38488/basic-enzyme-react-test/tree/3-enzyme-tests
[4-child-nodes]: https://github.com/jmitchell38488/basic-enzyme-react-test/tree/4-child-nodes
[5-updating-tests]: https://github.com/jmitchell38488/basic-enzyme-react-test/tree/5-updating-tests
[6-testing-hooks]: https://github.com/jmitchell38488/basic-enzyme-react-test/tree/6-testing-hooks
[func-components]: https://reactjs.org/docs/components-and-props.html
[unit-test]: https://en.wikipedia.org/wiki/Unit_testing
[json-ph]: https://jsonplaceholder.typicode.com/
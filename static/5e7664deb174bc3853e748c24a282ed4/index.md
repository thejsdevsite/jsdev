---
published: true
uid: "1iv8kl7wy8b6"
title: "Less is more; simplify your React code to super power your applications - part 1"
date: "2021-02-16T11:18:38.993Z"
description: "Always take the less-is-more approach when creating your React components, this will super power your applications and make your development tasks easier"
posttags: ["javascript","react","tutorial","webdev"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: "./hero.jpg"
publishedDate: "2021-02-16T13:09:20.055Z"
---

When it comes to [React][reactjs] development, there's a mantra that as developers we often forget, one that never, ever should be forgot: _"less is more"_. It's much more than an expression, it's a way of thinking, a way of solving problems, and it should be an influence on your design. [KISS][kiss] has been around for more than 60 years, and it's still as prescient today as it was over half a century ago.

As developers, we should avoid over engineering and over developing, doing too much when a much less is required to achieve the same result. This can be a combination of refactoring our components into smaller components, reducing complexity of our component inputs/outputs, and avoiding too much processing and complex algorithms.

We should be aiming to make everything as simple as possible, without making it simpler. That is to us, working as efficiently as possible without cognitive overload, without reducing the work we do to the simplest possible level, often creating more work. This isn't an issue isolated to new programmers only; we've all taken a shorter route to achieve an objective or goal. Sometimes we have no choice, sometimes we do it because we might not know a better way, and other times because we just don't want to invest the time to do it properly.

Less is more is something that developers of all sorts of experience can engage in, and should. It will inevitably improve your application development, improve the applications you work on, and help you work more effectively. The ultimate goal of measurement of a developer shouldn't be lines of code; it should be in quality of code produced, error rate and rework required.

### Simplify a React component

There's a number of strategies that we can take to simplify our components without drastic overhauls of existing components. Each strategy will be covered in a different blog.

1. Separate state from display, this will help your application align with well established MVC rules
2. Defer processing to services and custom hooks
3. Avoid overloading `useEffect` and `useState`
4. Determine if `redux` & `redux-saga` are really needed
5. Create higher order components to join functionality between components
6. Shift computational logic out of components into helper functions, inject with custom hooks
7. Use lazy loading and lazy behaviour where possible

#### 1. Separate state from display, this will help your application align with well established MVC rules
Traditional application design following MVC principles, is to split application logic into three distinct components; model, view and controller. The controller is responsible for handling user entry and exit and user events. The model is responsible for responding to user data mutations, and the view should always reflect the model.

![MVC overview](./mvc.jpg)

Let's look at an example of simplifying a common React component structure:

```typescript
const globalState = someStateTool();
const myComponent: React.FC<> = () => {
  const [ myState, setMyState ] = useState<any>({});
  const [ loaded, setLoaded ] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setLoaded(true); }, 2500);
    setTimeout(() => { globalState.set("foo", "bar")}, 5000);
  }, [])

  return loaded ? (<MySubComponent/>) : (<SpinnerComponent/>);
}

const mySubComponent: React.FC = () => {
  const [ someState, setSomeState ] = useState<any>(null);
  globalState.subscribeTo("someEvent", ev => setSomeState(ev.data));
  const handleClick = () => globalState.set("foo", "bar");

  return (
    <div>
      <button onClick={handleClick}>Some title</button>
    </div>
    <div>{someState.foo}</div>
  )
}
```

Each component includes isolated functionality, specific to that component. Thus, they are not pure, but they are independent and interchangeable. These type of components inherently respond to various user input behaviours and data driven events. That often comes hand-in-hand with increased complexity, and increased coupling, if not directly on parent components, but on streams, event subscriptions and other sources of data and events.

There's also a significant testing effort involved in each component, as both will need to mock various services and providers and handle behaviours and interactions.

```typescript
// Create a contract for the sub component
type SubComponentType = { foo: string, handleClick: () => void };

const globalState = someStateTool();
const myComponent: React.FC<> = () => {
  const [ myState, setMyState ] = useState<any>({});
  const [ loaded, setLoaded ] = useState<boolean>(false);
  globalState.subscribeTo("someEvent", ev => setMyState(ev.data));
  const handleClick = () => globalState.set("foo", "bar");

  useEffect(() => {
    setTimeout(() => { setLoaded(true); }, 2500);
    setTimeout(() => { globalState.set("foo", "bar")}, 5000);
  }, [])

  return loaded ? (<MySubComponent foo={myState.foo} handleClick={handleClick}/>) : (<SpinnerComponent/>);
}

// Make sure our component adheres to the type contract
const mySubComponent: React.FC<SubComponentType> = ({ foo, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Some title</button>
    </div>
    <div>{foo}</div>
  )
};
```

We can even take this one step further and separate the transition component into a higher order component, or a wrapping component that renders different components based on state.

```typescript
type SubComponentType = { foo: string, handleClick: () => void };

const globalState = someStateTool();

const myComponentLoader: React.FC = () => {
  const [ loaded, setLoaded ] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { setLoaded(true); }, 2500);
  }, [])

  return loaded ? (<MyComponent/>) : (<SpinnerComponent/>);
}

const myComponent: React.FC<> = () => {
  const [ myState, setMyState ] = useState<any>({foo: globalState.get("foo")});
  globalState.subscribeTo("someEvent", ev => setMyState(ev.data));
  const handleClick = () => globalState.set("foo", "bar");

  return <MySubComponent foo={myState.foo} handleClick={handleClick}/>;
}

const mySubComponent: React.FC<SubComponentType> = ({ foo, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Some title</button>
    </div>
    <div>{foo}</div>
  )
};
```

We've created more lines of code to represent the same component structure, but we've:
1. Separated the model logic from the view logic
2. `MySubComponent` is a pure component; given the same inputs, it should always produce the same output
3. `MyComponent` is easily testable with a tool like Enzyme - just need to verify the sub-component is loaded
4. All loading logic is handled through a top-level component. The components that can be loaded can be swapped when required.

Stay tuned for part 2 where I'll cover deferring processing to services and [custom hooks][customhooks].

[kiss]: https://en.wikipedia.org/wiki/KISS_principle
[reactjs]: https://reactjs.org/
[customhooks]: https://reactjs.org/docs/hooks-custom.html
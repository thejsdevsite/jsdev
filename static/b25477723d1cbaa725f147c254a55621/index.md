---
published: true
uid: "2h7klrgrmp3"
title: "Less is more; simplify your React code to super power your applications - part 3"
date: "2021-03-02T03:41:00.711Z"
description: "Always take the less-is-more approach when creating your React component, this will super power your applications and make your development tasks easier"
posttags: ["javascript","react","tutorial","webdev"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: "./hero.jpg"
publishedDate: "2021-03-03T06:41:49.929Z"
---

This is the second article in a series covering different strategies to simplify your React applications.

### Simplify a React component

There's a number of strategies that we can take to simplify our components without drastic overhauls of existing components. Each strategy will be covered in a different blog.

1. [Separate state from display, this will help your application align with well established MVC rules](https://thejs.dev/jmitchell/less-is-more-simplify-your-react-code-to-super-power-your-applications-8b6)
2. [Defer processing to services and custom hooks](https://thejs.dev/jmitchell/less-is-more-simplify-your-react-code-to-super-power-your-applications-part-2-c29)
3. __Avoid overloading `useEffect` and `useState`__
4. Determine if `redux` & `redux-saga` are really needed
5. Create higher order components to join functionality between components
6. Shift computational logic out of components into helper functions, inject with custom hooks
7. Use lazy loading and lazy behaviour where possible

### Avoid overloading `useEffect` and `useState`

`useEffect` and `useState` are powerful tools in the React functional arsenal. The `useState` hook supports binding persistent state to a component through multiple renders, while `useEffect` is similar to the `componentDidMount` and `componentDidUpdate` lifecycle methods of React class components, except that the function will execute once the render has been committed to the screen.

#### The `useState` hook, how and when to use it
The `useState` hook provides support for setting stateful data on a component, and when a new value is set, equates to a re-render of the component. This is especially valuable for components that need to maintain localised state, specific to the component, or to be passed to children components as a prop.

One particular usage of `useState` is to set transitional states for a component, that could be driven by the fetching and rendering of asynchronous data. When loading data, we should be presenting a temporary state to the user, and transitioning from that previously rendered state to the new state.

https://codepen.io/jmitchell38488/pen/JjbvBKQ

We can also capture user input within the component, and trigger re-renders of the component and not the parent, by avoiding prop drilling and using local state:

```js
// Example from React
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

React's unidirectional update of changes means that we can avoid issues where prop changes are communicated from child to parent, like it was possible in earlier versions of AngularJS. While it's a good thing, maintaining state across multiple components in the same parent component, especially where transitional data and error messaging is relevant, can be a tricky situation.

One such example is the fetching of data from an API, the transformation of that data, and the handling of various error scenarios. Depending on the way that error handling is presented, especially when using static pages and static routes, it may not be possible to customise the data that's presented to the user.

```js
const [loaded, setLoaded] = useState(false);
const [hasTransformError, setHasTransformError] = useState(false);
const [hasApiFetchError, setHasApiFetchError] = useState(false);
const [hasSomeOtherError, setHasSomeOtherError] = useState(false);

useEffect(async () => {
  try {
    const response = await fetch("/some/api");
    const json = await response.json();
    const transformed = transformer.transformJson(json);
  } catch (e) {
    if (e instanceof TransformerError) {
      setHasTransformError(true);
    } else if (e instanceof ApiError) {
      setHasApiFetchError(true);
    } else {
      setHasSomeOtherError(true);
    }
  }
});

if (hasTransformerError || hasApiFetchError || hasSomeOtherError)
  // Possibly render error to screen, or redirect to hard fail/static error screens

```

While the above pattern is an example, it's not a graceful nor elegant way of handling error scenarios, but for specific circumstances, such as the fetching data from one api endpoint on page load, fetching data from another api endpoint to verify, and posting data to another endpoint, the methods of handling various error scenarios can be limited when using React components.

#### Setting useState with initial data from callable function
You can initialise an instance of the `useState` hook with an object or primitive data, or a callable function that is executed by React, and the value is returned as the default value. This can be useful in circumstances where an initial value may need to be calculated from a data store, and it's cleaner than prop drilling. 

It's worth keeping mind, that any value derived from a computationally intensive function, provided as the default callable to `useState` _will_ block the UI from rendering, and this is why it's _always_ advised to rely on `useEffect` to provide lazy loading of data. Unlike a callable function, `useEffect` will not block the UI after render.

#### Lazy loading state with `useEffect`
`useEffect` when combined with `useState` is a powerful asynchronous tool for loading, mutating and displaying data provided by an API. It's a very common strategy employed in many React applications, and is one of the common reasons for creating custom hooks.

With our previous example, we create a component called `Todos`, which fetches and displays content from the json placeholder API. This component is responsible for quite a lot - fetching data from an API, transformation, reconciling state and rendering the UI.

```js
const Todos = () => {
  const [todos, setTodos] = useState();
  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await response.json();
    setTodos(todos);
  }, []);

  // Render the content of the screen
}
```

We can shift a lot of the processing and state handling to a custom hook, and expose the values returned by the custom hook, such as `todos`:

```js
const useTodos = () => {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await response.json();
    setTimeout(() => {
      setTodos(todos);
    }, 2500);
  }, []);
  
  return { todos };
}

const Todos: React.FC = () => {
  const { todos } = useTodos();
  return todos.length > 0 ? <p>Hello, world! {todos.length} todos!</p> : <Spinner/>
}
```

#### Observable updates with `useState` and `useEffect`
`useEffect` can be initialised with an observable array of properties, causing the `useEffect` to be executed each time one of the properties is changed. This is especially useful when listening to UI events across the page, and rendering components as the user interacts with various elements on the screen.

A very common use case is pagination. Given a user interacts with a button, we want to show another set of records as we traverse the data set.

https://codepen.io/jmitchell38488/pen/zYojJxG

When we run thee codepen, we see three things:
* We've used a custom hook `useTodos` to encapsulate our API fetching, data transformation and temporary caching of Todos
* A `useEffect` hook call binds to `page`
* We export two derived values and `setPage`

By exporting `setPage`, we can very easily trigger UI updates and additional data fetching by setting a new value with `setPage`:

```js
const TodosPaginate = () => {
  const {todos, page, setPage} = useTodos();
  return (
    <div>
      <p>Page: {page}</p>
      { page > 1 ? <button onClick={() => setPage(page-1)}>Prev ({page-1})</button> : null }
      { page < 10 ? <button onClick={() => setPage(page+1)}>Next ({page+1})</button> : null }
    </div>
  );
}
```

#### Custom hooks
Custom hooks are great ways to encapsulate behaviour. The code can be trivial, or quite complex and intensive, but importantly it's encapsulated and removed away from the view layer of our components. This is a common design trait with MVC applications, in this case we're treating our custom hooks as models, defining logic and behaviours that directly affect the view. That model can also respond to user inputs, through exposed helper functions or `setState` calls.

It's important to remember though, that custom hooks _should not_ maintain state that can be consumed across multiple components. This is so that the application behaves in a predictable and reliable fashion, and that hooks aren't abused and used in ways that they were never designed to.

In our example above, we've exposed the `todos` list, the `page` number and `setPage`, which will trigger the asynchronous loading and re-render of the page. In our codepen example, we've also attempted to load the same custom hook `useTodos` into both the `Todos` and `TodosPaginate` component.

```js
const Todos = () => {
  const {todos, page} = useTodos();
  // ...
}

const TodosPaginate = () => {
  const {todos, page, setPage} = useTodos();
  // ...
}
```

An expected behaviour here might be to have the same hooks shared across multiple components. That would be handy and great, wouldn't it? But alas, the real behaviour here is that the hooks are merged with the component that's calling them. Given `n` number of components using `useTodos`, there will be `n` number of bindings of the same `useState` and `useEffect` calls. It's trivial to test this - add `console.log` or view the network tab in your console to try it out yourself.

The proper React way to expose data for use across multiple components and custom hooks is to use the [Context API](https://reactjs.org/docs/context.html).

#### Context API
The context api provides a way to pass data through the React component tree without resorting to prop drilling. You can implement it as much as or little as you like, and you can implement it in specific locations.

The data contained in the Context API is considered to be global data, and can be used throughout your application. Data that is considered priviledged, such as authenticated user information, or a secure cookie perhaps, should _not_ be stored in a context. The Context API is great for use with theme overrides, specific localised behaviour such as pagination, or controlling page layout.

We can take our simple Todos app and make it more responsive to page navigation, by declaring a Todos Context and providing it to our components. There is one caveat - a context will only publish changes when the source data changes. This ensures unidirectional communication and propagation. We can define a handler to update the state for us, and provide it through the context `Provider`.

https://codepen.io/jmitchell38488/pen/vYyrEXe

It's worth noting that it's not required to provide a context [Consumer](https://reactjs.org/docs/context.html#contextconsumer) in functional components, because we _can_ use a custom hook instead. A `Consumer` and custom hook behave similarly - an object is provided and will listen to propagated updates. With the custom hook you can expose data from the `useContext`, while the `Consumer` requires a function to render something to screen with the variables provided by the context.

```js
<TodosContext.Consumer>
  {todos => /* render something based on the context value */}
</TodosContext.Consumer>

// Behaves similarly to:
const useTodosContext = () => {
  return { page, todos } = React.useContext(TodosContext);
}
```

### When to consume `useEffect` and when to consume `useLayoutEffect`
The [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) hook is a powerful feature of React that allows functional components to behave in an asynchronous way. If you're not careful, there are traps that you need to avoid that are made as clear as they could possibly be. It is very easy to trigger multiple executions of a `useEffect` hook if you're not careful, and before you know it, your application will be grinding your browser to a halt.

It's not always necessary to execute `useEffect` after each re-render, and there are ways to mitigate against this, using `useState`, `useRef`, or observing values that don't change. The best way to apply these methods is to use a custom hook, but each of these strategies still execute `useEffect` multiple times.

```js
// Using `useState` to maintain execution state for hook
const useCustomHook = (fn) => {
  const [state, setState] = useState({completed: false});
  useEffect(() => {
    // Only execute if state.completed has not been set yet
    if (!state.completed) {
      fn && fn();
      setState({...state, completed: true});
    }
  }, [state.completed]);
}

// Using `useRef` to maintain execution state for hook
const useCustomHook = (fn) => {
  const ref = useRef(false);
  useEffect(() => {
    // Only execute if ref.current is true
    if (!!ref.current) {
      fn && fn(); 
    } else {
      ref.current = true;
    }
  }, [ref.current]);
}

// Only execute this hook once, ever, but this _will_ throw an exhaustive deps warning with eslint!
const useCustomHook = (fn) => {
  useEffect(() => {
    fn && fn();
  }, []);
}
```

Having the ability to observe on a changing property is valuable for responding to specifically observable events, such as pagination as previously described, or incorporating [RxJS into your application](https://thejs.dev/jmitchell/managing-your-reactjs-application-state-with-rxjs-2hq).

While you'll likely use `useEffect` in almost all occasions for loading data asynchronously and even mutating the DOM, [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) is fired immediately after the DOM has been updated. This is before the browser "paints" the changes, providing an entry point to do additional mutations before the user can even see the changes. This is hugely beneficial when content needs to be dynamically resized, or external DOM documents are being loaded and need to be mutated, or styles need to be changed.

Because the hook fires _synchronously_, computationally intensive functions _will block_ the render of the UI, resulting in an interface that may appear laggy or glitchy. You should use `useLayoutEffect` when you need to mutate the DOM and/or perform/calculate measurements, and `useEffect` when you don't need to directly interact with the DOM, or mutations are asynchronous/observable.

Stay tuned for the next article when we determine if `redux` and `redux-saga` are really needed, and what other options are available.
---
published: true
uid: "1n6akl8zgc29"
title: "Less is more; simplify your React code to super power your applications - part 2"
date: "2021-02-17T05:16:29.072Z"
description: "Always take the less-is-more approach when creating your React component, this will super power your applications and make your development tasks easier"
posttags: ["javascript","react","tutorial","webdev"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
hero: "./hero.jpg"
publishedDate: "2021-02-17T06:51:07.154Z"
---

This is the second article in a series covering different strategies to simplify your React applications.

### Simplify a React component

There's a number of strategies that we can take to simplify our components without drastic overhauls of existing components. Each strategy will be covered in a different blog.

1. [Separate state from display, this will help your application align with well established MVC rules](https://thejs.dev/jmitchell/less-is-more-simplify-your-react-code-to-super-power-your-applications-8b6)
2. __Defer processing to services and custom hooks__
3. Avoid overloading `useEffect` and `useState`
4. Determine if `redux` & `redux-saga` are really needed
5. Create higher order components to join functionality between components
6. Shift computational logic out of components into helper functions, inject with custom hooks
7. Use lazy loading and lazy behaviour where possible

#### Defer processing to services and custom hooks
React lacks the concept of services, unlike Angular which has it baked into the framework, especially through injectable resources. As React developers, we need to bake this functionality into our projects. Services neatly encapsulate specific functionality, become an interchangeable resource through TypeScript casting, and is another step towards shifting logic away from the presentation layer.

Quite often, we'll see a component that might do fetching and presentation in the same component:

```typescript
const myComponent: React.FC = () => {
  const [ todos, setTodos ] = useState<any>([]);
  useEffect(async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const todos = res.data.filter(!!todos.completed));
    setTodos(todos);
  });

  return (
    <ul>
    { todos.map(item => (
      <li key={item.id}>
        <a href={`https://jsonplaceholder.typicode.com/todos/${item.id}`>{item.title}</a>
      </li>
    ))}
    </ul>
  )
}
```

Surface level it doesn't look like much is wrong with this component. But what if we need to start handling errors from the API, additional validations and data manipulations? Our `useEffect` hook suddenly becomes overloaded, bloated with behaviour that can and should be deferred to a service.

```typescript
useEffect(async () => {
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const todos = res.data.filter(!!todos.completed));
    setTodos(todos);
  } catch (e) {
    setLoaded(false);
    setErrorMessage("Could not load todos, please refresh your browser and make sure you're connected to the internet!");
  }
});
```

The more we add to our `useEffect` hook, the more complex the component becomes and the more difficult they become to test. Deferred/asynchronous rendering already makes testing difficult, with tools like jest and enzyme handling updates, but not easily.

We can simplify this code by shifting the API handling to a service, allowing us to make requests and handle errors consistently, and separating the `useEffect` code into a custom hook.

```typescript
type Todo = { id: number, title: string };
type TodosService = {
  todos: async (completed?: boolean) => Promise<Array<Todo>>,
  todo: async (id: number) => Promise<Todo>
};

class TodosServiceImpl implements TodosService {
  async todos(completed?: boolean): Promise<Array<Todo>> {
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
      if (completed !== undefined) {
        return res.data.filter(todo => todo.completed === completed));
      }
      return res.data;
    } catch (e) {
      throw "Could not load todos, please refresh your browser and make sure you're connected to the internet!";
    }
  }

  async todo(id: number): Promise<Todo> {
    try {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return res.data;
    } catch (e) {
      throw `Could not load todo ${id}, please refresh your browser and make sure you're connected to the internet!`;
    }
  }
}
```

In the case that we need an interchangeable service, we can provide a new service as long as it satisfied the contract of `TodosService`:

```typescript
const todosService: TodosService = {
  todos: async (completed?: boolean): Promise<Array<Todo>>  => {...}
  todo: async (id: number): Promise<Todo> => {...}
}
// test of the implementation
```

Now that we have our service implementation, we can consume it in our components:

```typescript
const todosService: TodosService = new TodosServiceImpl();

const useTodosLoader = (todosService: TodosService) => {
  const [ todos, setTodos ] = useState<Array<Todos>>([]);
  const [ hasError, setHasError ] = useState<boolean>(false);
  const [ loaded, setLoaded ] = useState<boolean>(false);

  useEffect(async () => {
    try {
      const list = await todosService.todos();
      setTodos(list);
      setLoaded(true);
    } catch (e) {
      setHasError(true);
    }
  }, []);

  return { todos, hasError, loaded };
}

const myComponent: React.FC<{ todosService: TodosService }> = ({ todosService }) => {
  const { todos, hasError, loaded } = useTodosLoaded(todosService);

  return (
    <ul>
    { todos.map(item => (
      <li key={item.id}>
        <a href={`https://jsonplaceholder.typicode.com/todos/${item.id}`>{item.title}</a>
      </li>
    ))}
    </ul>
  )
}
```

All aspects of the above code is testable - we can verify that the serice is called, we can also verify the API is called. We can verify the loading of `MyComponent` through the responses of `useTodoLoader`, and we can mock and stub the behaviour right the way through. While we've at least doubled the amount of code to simplify the component, the increase in code is directly proportional to the simplicity of the functional code and the test code.

Custom hooks allow us to logically group behaviours together, especially when we maniuplate state using `useState` hooks. We can expose outputs from the hook to be consumed in our component, allowing to be updated when the hooks change the state. This provides rich functionality to use cross components, especially when using `useState` to maintain state between components.

```typescript
const useMyState = () => {
  const [ myState, setMyState ] = useState(true);
  return { myState, setMyState }
}

const myComponent = () => {
  const { myState } = useMyState();
  ...
}

const myOtherComponent = () => {
  const { myState, setMyState } = useMyState();
  useEffect(() => {
    setTimeout(() => {setMyState(false)});
  }, []);
  ...
}
```

We can also use hooks to subscribe to event streams. This allows mutliple non-connected components to update at the same time based on state changes, or driven by events.

```typescript
const myEventStream = () => {
  const [ myState, setMyState ] = useState(null);
  useEffect(() => {
    const subscription = observable.subscribe();
    subscription.next(event => setMyState(event.data));
    return () => subscription.unsubscribe();
  })
  
}

const myComponent = () => {
  const { myState } = useMyState();
  ...
}

const myOtherComponent = () => {
  const { myState } = useMyState();
  ...
}

observable.next({data: { foo: "bar"}});
// Updates myComponent
// Updates myOtherComponent
```

Stay tuned for the next article when we'll look at avoid overloading `useEffect` and `useState`.
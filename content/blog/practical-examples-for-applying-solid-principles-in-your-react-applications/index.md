---
uid: 7wxkfi8a06e
title: Practical examples for applying SOLID principles in your React applications
date: "2020-07-01T22:12:03.284Z"
description: "Practical examples for applying SOLID principles in your React applications"
published: true
publishedDate: "2020-07-01T22:12:03.284Z"
posttags: ["javascript", "react", "oop", "design"]
authors: ["jmitchell"]
primaryAuthor: "Justin Mitchell"
---

In this article, we are are going to discuss what [SOLID](https://en.wikipedia.org/wiki/SOLID) principles are, and how they can be applied to your React projects, with practical examples.

...

Have you ever worked on an application, in any language, and struggled to understand the logic, the flow of data and messages, or the oversized, overstuffed controllers, domain models, or helper functions, and thought to yourself "gee whiz, what's going on there", while scratching your head.

You're not alone. It's not a random, rare phenomenon, found in the lush and remote wilderness of Kathmandu, growing on the side of a mountain somewhere, where a sip of the wonderful and mystical waters of the ACME inc. river will suddenly bring everything into focus.

![When I design my code, I drink cool, mystical waters from Kathmandu](./46ss1z.jpg)

It may well be that the code you're working on hasn't incorporated, or been designed to take advantage of the SOLID principles. Five software development principles that can turn a bowl of meatballs and spaghetti, into delicious tortellini.

To start, let's address what the SOLID principles are. SOLID is a mnemonic acronym for five design principles that are intended to make software development easier. Though the principles - championed by Robert C. Martin - apply primarily to object-oriented languages, they can be applied to any language, if taken as a core philosophy of the development process.

Each letter in SOLID represents an individual principle, and they are:

__S__ - Single-responsibility principle<br/>
__O__ - Open-closed principle<br/>
__L__ - Liskov substitution principle<br/>
__I__ - Interface segregation principle<br/>
__D__ - Dependency inversion principle<br/>

#### S - Single-responsibility principle
A class, or component, should have a single responsibility. This is typically found in MVC designed applications, where the separation of business logic and UI is defined by a business (or domain) model, and a UI layer. What the single responsibility is or should be, is at the discretion of the developer.

Semantically, the single-responsibility principle states that every module or class should have a single responsibility. This means that a class should not render data, mutate data and perform API requests in the same class.

In reality, that's far more difficult to achieve, and likely to lead to code bloat and an absurd degree of complexity, to achieve basic tasks. There are trade offs to following this principle to the letter, and it's better to find the sweet spot for you, your team and your project.

Take this basic example for instance, that provides a number of functions that do different things, such as mutating state, rendering, and calculating values.

```javascript
class Foo {
  
  constructor() {
    this.foo = "bar";
  }

  mutateMe(a) {
    this.foo = a;
  }

  doSomething(a, b) {
    return Math.random() * a + ( b * Math.random())
  }

  doSomethingElse(a, b) {
    return `Hello ${a}, fine ${b} today, isn't it?`
  }

  print() {
    console.log("Whatever man!");
  }

  doApiRequest() {
    fetch("/some/api/endpoint");
  }

  render() {
    return (
      <div>
        <p>Some html to render! our foo is: {this.foo}</p>
      </div>
    );
  }
}
```

Depending on what degree you - or your team - wants to follow the single-responsibility principle, you may need to refactor your code, to separate out the functionality. Specific examples would include logger instances, service class that perform API requests, transformers, filters and hydrators that deal with API responses, and renderers that are responsible for taking data and presenting it to the screen.

Let's look at one of the more basic React examples you'll find:

```jsx
const MyComponent: React.FC = ({ foo, bar, showFoo, showBar }) => {
  return (
    <ul>
      { showFoo ? (<li>foo: {foo}</li>) : null }
      { showBar ? (<li>bar: {bar}</li>) : null }
    </ul>
  );
}
```

So, what's wrong with that component? Well, nothing really, but there are minor improvements that we can make to this specific component to improve change handling within React.

```jsx
const MyComponent: React.FC = ({ foo, bar, showFoo, showBar }) => {
  return (
    <ul>
      <RenderLine showLine={showFoo} value={foo} label="foo"/>
      <RenderLine showLine={showBar} value={bar} label="bar"/>
    </ul>
  );
}

const RenderLine: React.FC = ({ showLine, value, label }) => {
  if (!showLine) return null;
  return (
    <li>{label}: {value}</li>
  );
}
```

While this is a very simple example of single-responsibility principle, we are deferring the treatment of data, the rendering, and anyway operations we want to apply to that data, to the component responsible for it.

We can then add additional logic to our specific component, such as:

```jsx
const RenderLine: React.FC = ({ showLine, value, label }) => {
  if (!showLine) return null;
  const area = Math.pi() * Math.pow(value, 2);
  return (
    <li>{label}: {value}, area: {area}</li>
  );
}
```

The major benefit we gain from following the single-use principle is the separation of concerns, a fundamental improvement to any front-end javascript code base. It developers to write simpler tests, understand the logical flow of code, and most importantly, reduce cognitive load when writing code.

#### O - Open-closed principle
Software entities, such as classes and functions, should be open for extension, but closed for modification.
![Software entities, such as classes and functions, should be open for extension, but closed for modification.](./46sutd.jpg)

Yeah, this one's not that clear to understand, but if you consider it to be more of a generalisation than a rule, it begins to make more sense. Keeping in mind that this principle originated in the 90s, it's less applicable today than it was two decades ago.

Take if you will function Foo. We can extend function Foo multiple ways, either mutating the instance `.prototype.` namespace, or by extending the function using `.call`. Ultimately, we end up with a near identical result - a function that has been extended beyond its original capacity. This is what is considered open.

```javascript
// Example using .call
function Polygon() {
  this.sides = 2;
  this.dimensions = "2d";
  var _this = this;
  this.print = function () {
    console.log("%s dimensions are easy to work with!, sides: ", _this.dimensions, _this.sides);
  }
}
function Quad() {
  Polygon.call(this);
  this.sides = 4;
}
new Quad().print();
// Outputs: 2d dimensions are easy to work with!, sides:  4
```

A class or function that is provided as part of a library package, is considered closed, because it should not be modified, and in many OOP languages, cannot be modified because it has been compiled. This is less applicable to JavaScript because of its open nature, although code compiled by bundlers, especially obfuscated code, should be considered closed.

#### L - Liskov substitution principle
![Liskov substitution principle](./46t27g.jpg)
This principle refers to the idea of designing by contract, which was a big design principle in the 1980s, 1990s and early 2000s, when languages such as C++ and Java exploded on the development scene, promoting features such as Generics and Templates, Interfaces and Classes.

This principle is more specific than just features of a language, and it's arguably one of the most important design principles that you can use. Designing by contract, is by a means where software components within an application should be replaceable with instances of subtypes, without altering the correctness of the program.

Ideally, an object of type T should be replaceable with an object of type S, as long as they both share the same super type. A sub type is considered a function or class that inherits the functions of the super type it extends. 

Take this basic example of rendering shapes to a pseudo canvas:
```javascript
class Shape {
  render() {
    throw new Error("Cannot render 'Shape'");
  }
}

class Square extends Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  render() {
    // psuedocode
    Canvas2d
      .drawRect(0, 0, height, width)
      .fill("white")
      .border("1px", "black");
    console.log(`Rendering Square (0, 0, ${height}, ${width})`);
}

class Circle extends Shape {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

  render() {
    // psuedocode
    Canvas2d
      .drawCircle(0, 0, height, width)
      .fill("white")
      .border("1px", "black");
    console.log(`Rendering Circle (0, 0, ${height}, ${width})`);
  }
}

class ShapeRenderer {
  constructor(shape) {
    this.shape = shape;
  }

  setShape(shape) {
    this.shape = shape;
  }

  render() {
    this.shape.render();
  }
}

// Create our instances of subtype 'Shape'
const mySquare = new Square(5, 5);
const myCircle = new Circle(8, 8);

// Create our instance of renderer
const myRenderer = new ShapeRenderer(mySquare);
myRenderer.render();
myRenderer.setShape(circle);
myRenderer.render();
```

We've created two subtypes of our super type (`Shape`), and swapped the instances in our renderer, because they are both instances of `Shape`. In standard ES6, this is possible using the `extends` keyword, and passing `Shape` as the class to extend.

[TypeScript](https://www.typescriptlang.org/) is a really awesome way to write JavaScript for modern applications, and it has the Liskov substitution principle baked in, especially developing by contract. Let's add typescript to our React app:

```typescript
interface Shape {
  render(): React.JSX;
}

interface ShapeRendererProps {
  shape: Shape;
}

type ShapeProps = (width: number, height: number) => Shape;

const Circle: ShapeProps = (height: number, width: number): Shape => {
  return {
    render: () => (<div>(CIRCLE) Height: {height}, width: {width}</div>)
  }
}

const Square: ShapeProps = (height: number, width: number): Shape => {
  return {
    render: () => (<div>[SQUARE] Height: {height}, width: {width}</div>)
  }
}

const ShapeRenderer: React.FC<ShapeRendererProps> = ({ shape }) => shape && shape.render ? shape.render() : null;
```

Using TypeScript, we can easily swap objects and functions that share the same _contract_, without breaking the functionality of the application.

https://codepen.io/jmitchell38488/pen/bGEYNoZ

#### I - Interface segregation principle
![Interface segregation principle](./46t2re.jpg)
This principle is best described as taking the granular approach to defining the make up of your application, in conjunction with the Liskov substitution principle, but do it so that you don't have one massive general purpose interface.

The `Shape` example from the Liskov principle is great, because you can extend the functionality with subtypes, while maintaining the basic `Shape` functionality, therefore interoperability not just in the application, but in a library if you were to ever share code.

```typescript
// General purpose interface
interface Shape {
  render(): void;
  area(): number;
  radius(): number;
}
```

Do we need to calculate radius for a non-circulate shape? Unlikely. We need to split this interface up, so that `Square` isn't forced to implement a function that provides no value.

```typescript
interface Shape {
  render(): void;
  area(): number;
}

interface Circle extends Shape {
  radius(): number;
}
```

#### D - Dependency inversion principle
![Dependency inversion principle](./46t2wv.jpg)
Dependency inversion is best described as a method by which the application should depend on interface, or abstractions, rather than specific instances of classes or functions. [The wikipedia article on dependency injection](https://en.wikipedia.org/wiki/Dependency_inversion_principle) provides several great examples of what it is and how to incorporate it into your application.

In react this is more difficult to achieve in the specific components, because you will end up forming composite components, that take n-components as input, to generate a single output - otherwise known as a Higher-order Component (HoC). 

React doesn't lend itself well to dependency inversion in the component tree, because most components are concretions - defined components that exist. It is possible to use composite components to render a component, and pass the composite component around as an argument, but there is still a requirement to have a known type.

```typescript
interface CompositeProps {
  component: any;
}

const Foo = () => <div>Foo</div>;

const RenderCompositeComponent: React.FC<CompositeProps> = ({ component: Component, ...props }) => <Component {...props} />;

<RenderCompositeComponent component={Foo}/>
```

Where benefits using dependency inversion comes in within React is the way that props are passed to other components, thereby reducing the dependencies that children have on other classes, functions and modules.

A simple example:
```javascript
const Foo = ({ someVal }) => {
  return (
    <div>{someFilterFn(someval)}</div>
  );
}
```

In this case, we can rewrite our render function to abstract the filtering function to our parent component, thereby reducing the dependencies that our child component has.

```javascript
const Foo = ({ callback, someVal }) => {
  return (
    <div>{callback(someval)}</div>
  );
}
```

The testing for this component is simplified, because we need to pass input parameters instead of mocking modules, functions or static classes, and the logic to do the filter is encapsulated within the parent component.
**https://www.freecodecamp.org/news/react-beginner-handbook/**
React in itself has a very small API, and you basically need to understand 4 concepts to get started:

x Components
x JSX
x State
x Props

You don't have to be a JavaScript expert, but I think you need a good overview of:

x Variables
x Arrow functions
x Work with objects and arrays using Rest and Spread
x Object and array destructuring
x Template literals
x Callbacks
x ES Modules

**create-react-app**
This application comes with a series of files that do various things, mostly related to configuration, but there's one file that stands out: App.js.

App.js is the first React Component you meet.

---

import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
return (

<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
Learn React
</a>
</header>
</div>
)
}

export default App

---

We import some things, and we export a function called App.
What looks like HTML is JSX, a special language we use to build a component's output.
A component can have its own state, which means it encapsulates some variables that other components can't access unless this component exposes this state to the rest of the application.
A component can also receive data from other components. In this case we're talking about props.

**Intro to JSX**
One of the main benefits of JSX is that it makes it very easy to build a UI.
In particular, in a React component you can import other React components, and you can embed them and display them.
A React component is usually created in its own file, because that's how we can easily reuse it (by importing it) in other components.
But a React component can also be created in the same file of another component, if you plan to only use it in that component. There's no "rule" here, you can do what feels best to you.

## create a WelcomeMessage component

## inside the App component JSX add <WelcomeMessage /> to show this component in the user interface

We say that WelcomeMessage is a child component of App, and App is its parent component.
We're adding the <WelcomeMessage /> component as if it was part of the HTML language.

1.  One of the differences might be quite obvious if you looked at the App component JSX: there's a strange attribute called className.
    In HTML we use the class attribute. It's probably the most widely used attribute, for various reasons. One of those reasons is CSS. The class attribute allows us to style HTML elements easily, and CSS frameworks like Tailwind put this attribute to the center of the CSS user interface design process.
    But there's a problem. We are writing this UI code in a JavaScript file, and class in the JavaScript programming language is a reserved word. This means we can't use this reserved word as we want. It serves a specific purpose (defining JavaScript classes) and the React creators had to choose a different name for it.
    That's how we ended up with className instead of class.

2.  Another big difference between JSX and HTML is that HTML is very relaxed, we can say. Even if you have an error in the syntax, or you close the wrong tag, or you have a mismatch, the browser will try its best to interpret the HTML without breaking.
    It's one of the core features of the Web. It is very forgiving.
    JSX is not forgiving. If you forget to close a tag, you will have a clear error message:

3.  Another big difference between JSX and HTML is that in JSX we can embed JavaScript.
    We can print this value in the JSX by adding {message} anywhere in the JSX.
    Inside the curly brackets { } we can add any JavaScript statement, but just one statement for every curly bracket block.
    And the statement must return something.
    For example this is a common statement you will find in JSX. We have a ternary operator where we define a condition (message === 'Hello!'), and we print one value if the condition is true, or another value (the content of message in this case) if the condition is false:
    {
    message === 'Hello!' ? 'The message was "Hello!"' : message
    }

**State in React**
The state is the set of data that is managed by the component.
Think about a form, for example. Each individual input element of the form is responsible for managing its state: what is written inside it.
A button is responsible for knowing if it's being clicked, or not. If it's on focus.
A link is responsible for knowing if the mouse is hovering over it.

In React, or in any other components-based framework/library, all our applications are based on and make heavy use of components' state.
We manage state using the useState utility provided by React. It's technically a hook (you don't need to know the details of hooks right now, but that's what it is).
You import useState from React in this way:
import React, { useState } from 'react'

**Props in React**
We call props the initial values passed to a component.
Props can be passed as attributes to the component in the JSX:
<WelcomeMessage myprop={'somevalue'} />
and inside the component we receive the props as arguments:
function WelcomeMessage(props) {
return <p>Welcome!</p>
}

Passing props to components is a great way to pass values around in your application.
A component either holds data (has state) or receives data through its props.
We can also send functions as props, so a child component can call a function in the parent component.
A special prop is called children. That contains the value of anything that is passed between the opening and closing tags of the component.

**Data flow in React**
In a React application, data typically flows from a parent component to a child component, using props as we saw in the previous section.
If you pass a function to the child component, you can however change the state of the parent component from a child component.

**User events in React**
React provides an easy way to manage events fired from DOM events like clicks, form events, and more.
You can use the onClick attribute on any JSX element.
React supports a vast amount of types of events, like onKeyUp, onFocus,onChange, onMouseDown, onSubmit and many more.

**Lifecycle events in React**
So far we've seen how to manage state with the useState hook. There's another hook I want to introduce in this book: useEffect.
The useEffect hook allows components to have access to the lifecycle events of a component.
useEffect() is great for adding logs, accessing 3rd party APIs, and much more.

**Ideas for next steps**

Learn more theory about the Virtual DOM, writing declarative code, unidirectional data flow, immutability, composition.

Start building some simple React applications. For example build a simple counter or a interact with a public API.

Learn how to perform conditional rendering, how to perform loops in JSX, how to use the React Developer Tools.

Learn how to apply CSS in a React application, with plain CSS or Styled Components.

Learn how to manage state using the Context API, useContext and Redux.

Learn how to interact with forms.

Learn how to use React Router.

Learn how to test React applications.

Learn an application framework built on top of React, like Gatsby or Next.js.


# React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. 
## What is a Hook? 
A Hook is a special function that lets you “hook into” React features. 

## When would I use a Hook? 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. 

## 1. UseState
The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracked in an application.

### How to use UseState Hook
We initialize our state by calling useState in our function component.

UseState accepts an initial state and returns two values:
- The current state.
- A function that updates the state.
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

### Syntax of UseState Hook

```javascript
import { useState } from 'react'

function App() {

   const [currentState, setCurrentState = useState(initial value of current state)
  
  return <Component />

}
```
## 2. UseEffect
The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. 

### How to use UseEffect Hook
useEffect accepts two arguments. The second argument is optional.
```
useEffect(callback[, dependencies]);
```
- callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
- dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().

### Syntax of UseEffect Hook

```javascript
import { useEffect } from 'react'

function App() {

useEffect(() => {

  // Side-effect callback...

}, [dependencies])

  return <Component />
}

```
### Syntax of UseEffect Hook with cleanup

Some side-effects need cleanup: close a socket, clear timers.

If the callback of useEffect(callback, deps) returns a function, then useEffect() considers this as an effect cleanup:
```javascript
import { useEffect } from 'react'

function App() {

useEffect(() => {

  // Side-effect callback...

    return () => {
    // Side-effect cleanup...
  };

}, [dependencies])

  return <Component />
}

```
Cleanup works the following way:

A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.

B) On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.

C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

## Run Locally

Clone the project

```bash
  git clone https://github.com/isyedhassanalii/react-hooks.git
```

Go to the project directory

```bash
  cd react-hooks
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


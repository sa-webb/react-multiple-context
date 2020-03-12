# React Material-UI Context Theming Example

An example of using different text colors for Material Typography components.
By using context these can be accessed without prop drilling. Considering how deeply nested text could be within the component tree, this example shows how to set up multiple contexts and call them with both Consumer and Hooks.

## Why Context

Context is primarily used when some data needs to be accessible by many components at different nesting levels.

Some components don’t know their children ahead of time.

It is recommended that such components use the special **children prop** to pass **children elements** directly into their output
[Read more](https://reactjs.org/docs/composition-vs-inheritance.html)

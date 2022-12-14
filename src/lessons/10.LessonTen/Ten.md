# Lesson Ten

It's now time to discuss the second most important hook in React: useEffect. Remember the lifecycle methods componentDidMount, componentDidUpdate, and componentWillUnmount? These are methods designed handle side effects in React. The Effect Hook combines the functionality of all three.

## Side Effects

A side effect in React is an interaction with the "outside world". When you need to do something outside of the React component, you are performing a side effect. For example, fetching data and manually changing the DOM are both examples of side effects.

### The Effect Hook

The effect hook works by running the contained code whenever the component renders, or when you instruct it to watch a particular element.

The basic structure of the hook is this:

`useEffect(() => {`

`}, [])`

The first parenthesis can be used to pass in params, while your logic will go inside the curly braces after the fat arrow. The last piece (`, []`), called a dependency array, is optional. We will discuss it in the next lesson.

#### Directions

1. Add an effect hook to Ten.jsx. Do not include a dependency array.

2. In the return of your hook, add the logic to update the document title based on the changing count.

`document.title = `You clicked ${addYourStateVariableHere} times`;`

3. Import into App.js and run your project.

4. Test the counter. You should see the count change in the paragraph text in the browser, as well as in the document title (look up at your browser tabs).

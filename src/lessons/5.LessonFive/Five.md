# Lesson Five

**It's finally time to start talking about hooks!**

I am sure you have noticed that these lessons have avoided the use of class based components, which are outdated at this point. React Hooks have been developed to allow programmers to use functional components, but still have access to state and other lifecycle functionality previously only found in class components. 

The first, and most important, hook we are going to cover is useState. This hook allows us to access state and change each state variable as needed. Please open Five.jsx side by side with these directions.

On *line 1*, you can see the import statement for the useState hook. This hook, as well as others will will discuss in later lessons, are contained in the react packages found in the node_modules.

*Line 4* is where we are declaring our state variable. Inside the square brackets, 'state' is the name of the state value, which we can use to call that value later in our code. setState is a function that behaves in the same way as this.setState in class components (more on this below). The naming convention here is deliberate. It is the name of the state variable with the word 'set' at the beginning. Both should be camelCase. 

After the equal sign on *line 4*, the useState function is called. The value passed in the parenthesis is the initial value of your state variable. In a class component, this would look like this:

`this.state = {`
`   state: "initialState"`
`}`

Before moving forward, import the Five component in App.js and render your project. You should see that state value rendered on the screen.

Looking again at Five.jsx, focus on *line 6*. Uncomment this line, and look again where your project is rendered in the browser. That h1 text should now read 'newStateValue'.

Before moving on to the next lesson, experiment with that setState function on *line 6*. Try setting different types of data in the parenthesis, and see how they render on the screen. If nothing shows up, make sure you open your console to see if you have any errors.

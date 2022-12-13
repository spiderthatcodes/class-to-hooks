# Lesson Six

To show you how much easier and more efficient React is with hooks, we are going to recreate the output from the PCC lesson 'Use State to Toggle an Element'. As before, it would be a good idea to open that lesson and refamiliarize yourself with the expected outcome. As you can see, the code outputs a button that toggles the visibility of an h1 element based on the state value.

## Directions

Open Six.jsx on a split screen with these directions. Make sure you also import the component into App.js and render your project in the browser. 

In the button on *line 10*, add an onClick. Remember, our function to change state is already declared when we declared state on *line 4*. Use that function inside the curly braces of the onClick.

Because the value in our visibility state variable is a boolean, a great way to change the value back and forth from true to false is to pass in !visibility as our value in the function you placed on the onClick. That simply sets it to the opposite of the current state of visibility. 

Uncomment *line 6*. If you have done the above tasks correctly, you should now be able to click the button and see the state value change in your console.

Once your state value is changing correctly, we can add the conditional rendering to *line 11*. First, wrap the whole line in curly braces to let React know you are going to add JavaScript logic. Inside the curly braces, add conditional rendering that will only show the h1 when visibility is true. 

**Hint: you can do this all on one line if you use the logical AND (&&) operator**

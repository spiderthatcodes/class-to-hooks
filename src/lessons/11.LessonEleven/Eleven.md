# Lesson Eleven

In this lesson, we will explore the uses of the dependency array in the effect hook. Looking back to the last lesson, you might recall that the explanation mentioned that useEffect code runs whenever the component rerenders, or when a watched element changes. The dependency array is where you instruct useEffect which element to watch.

Doing this is simply a matter of putting the name of the watched element inside the array. For example, the useEffect in the last lesson could be updated to look like this:

`useEffect(() => {` 
 `   document.title = `You clicked ${count} times`;`
 ` }, [count]);` <-- this is the dependency array

By adding the state variable 'count' to the dependency array, we are telling useEffect to only fire when the count variable changes. In your future coding, you will likely come across circumstances where you need to watch several elements at once, done by adding comma separated values.

In this lesson, you are going to apply your knowledge of both useState and useEffect, plus experiment more with conditional rendering.

## Directions

In the Eleven component, you can see a button that reads 'Add One'. Similar to lesson 10, you need to first set a state variable called 'count' that should have an initial value of one. Add the appropriate onClick logic to add one to that state variable each time the button is clicked.

Once you have a button that works as expected, add a new state variable called 'even', and set its initial state to false.

Next, create an effect hook with a dependency array that watches count. Inside the function, add logic that sets 'even' to true when count is even, and false when it is odd. There are many ways to do write this, but the goal is to be as efficient as you can.

Last, add logic to the <p> tag so that it reads "Count is Even" or "Count is Odd". If count is zero, the <p> should not be visible. Again, there are a range of ways to accomplish this, but the goal is to create one line of code.

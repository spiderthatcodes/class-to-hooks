# Lesson 7
In the component Seven, you can see the function 'exampleFunction' being called on the onClick. Add logic to that function to increase the count by 1, then console.log count.

Import the Seven component into App.js and run your code. Open the console and check to make sure your code is working. Pay close attention to those values in your console! If you did this lesson correctly, the number you see in your console should be one less than the number rendered below the button in your browser.

Keep in mind in your future coding that useState is an asynchronous function. Although we will get into asynchronous vs synchronous functions more in the future, for now just know that async functions can run in the background. In the useState hook, it updates and rerenders a component, which is not instantaneous. What you are seeing in this lesson is that lag, even though it appears to a human observer that both values changed at the same time. For now, this will not effect your coding.

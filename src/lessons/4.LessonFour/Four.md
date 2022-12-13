# Lesson Four

The objective of this lessons is to expand on your use of nested components by adding props. In PCC, the example of using props that they provide looks like this: 

`const Welcome = (props) => <h1>Hello, {props.user}!</h1>`

This will work, but generally it is better to destructure props and rewrite it like this: 

`const Welcome = ({user}) => <h1>Hello, {user}!</h1>`

Notice the use of curly braces inside of the parenthesis. If you forgot that, you will not successfully destructure, causing an error. If the component had two props, it would add the second (and third and so on) by adding a comma and listing them the same way as regular function parameters. Ex: 

`const Welcome = ({userOne, userTwo}) => <h1>Hello, {userOne} and {userTwo}!</h1>`

An example of passing these props into the component is as follows:


`<App>`
`   <Welcome userOne="Mark" useTwo="Jane" />`
`</App>`

## Directions

The final result of this lesson will look like the product of the lesson in PCC called 'Compose React Components'. It would not be a bad idea to open that lesson and get a clear understanding of the expected outcome.

1. Create a file/component called TypesOfFood

2. This component should have the following elements:

    - `<h1>Fruit</h1>`
    - `<h2>Non-Citrus</h2>`
    - `<h2>Citrus</h2>`
    - `<h1>Vegetables</h1>`

3. Make a file/component called List

4. The List component should take in a prop, lets call it array

5. List should return an unordered list where the list elements should come from mapping the prop array. If written correctly, List will be a reusable component that will render whatever array of strings is passed in as props.

6. Import List into TypesOfFood

7. There are 3 places where List should be rendered in TypesOfFood. Look at PCC again if you are not sure where it should go.

8. To get the data needed to pass as props into List, open the file data.js. You will see the arrays nonCitrus, citrus, and vegetables. Import each of these into your TypesOfFood file. If you get an error when you try to import, keep in mind that these arrays are not default exports. Console.log each array in your component to make sure you have imported the data successfully.

9. Now that you have your data, pass each array into the appropriate instance of List. If you do this correctly, you should be able to import TypesOfFood into App.js and see the same output as the PCC lesson.

**Best Practices Check: Are you adding a blank line to the end of your files?**

# Lesson Eighteen

In this lesson, we are going to create another path for your project. First though, you will move the logic for your Card and its parent component.

## Directions

1. Create two new folders in the components directory, one called Card and the other called Books.

2. In Card, either move the Card component and style sheet you created for lesson 14, or create a new version of each and copy paste the code. In Books, create a file called Books.jsx, and copy your component from lesson 15 into this file. Make sure the component name is now Books. Also move the associated stylesheet.

3. In App.js, add another <Route /> below the one containing Home.

4. In the path attribute, set it equal to '/books'. Import your Books component and set the element attribute equal to {<Books />}.

If you have completed these tasks successfully, you should be able to navigate to http://localhost:3000/books and see your mapped cards containing book data on the screen.

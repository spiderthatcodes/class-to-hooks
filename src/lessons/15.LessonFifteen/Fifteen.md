# Lesson Fifteen

In this lesson, we will add a data import with the effect hook, and utilize the Card component you created by mapping through imported data. The data we will import comes from the data.js file, and technically we could use the information that file contains without the effect hook (like you did in an earlier lesson). However, it is important than you learn how to set these processes up now because they will be necessary once we introduce API calls.

## Directions

1. Add a state variable and set its initial state to an empty array.

2. Import the bookData array from data.js. This should happen above the component, but below the useState import.

3. Create an effect hook that sets your state variable with the data from bookData.

4. In the component return, use map to return a Card component for each book in the data set.

5. Edit the Card component to take in props for title and description, then pass those in with your map. If you wish, you can also expand the Card component to also take in author and render that as well.

6. Add a style file to this folder.

7. Use flex to render the Cards in rows with space in between each card.

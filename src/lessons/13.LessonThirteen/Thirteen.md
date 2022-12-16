# Lesson Thirteen

In this lesson, we are going to take a brief detour from hooks to discuss styling in React projects. In PCC, you are taught how to use a lot of inline styling. While it certainly does work, it is not considered best code practice. As a rule, it is best to keep your styling conventions in a dedicated style sheet.

There are two ways to manage style sheets in React projects, depending on the size of the project and the practices of the organization. We will discuss the first in the lesson and second in lesson 14. 

For small projects with minimal styling, it is acceptable to put all styling in a centralized style sheet associated with a top level component. If you look, this project retains the file index.css. If you open that file, you will see that it is empty.

Open the component Thirteen and add a class to the <h2>. Remember, React uses className. Once done, move to the index.css file and add some sort of styling to that associated class, like a color or text decoration.

If you run the component from App.js, you should now see the styling changes in your browser.

You might be wondering why a style sheet imported into index.js would impact code written in Thirteen.jsx. This is because index.js is the top level of the component hierarchy. The styles imported into this level of your project will impact all of its descendants.

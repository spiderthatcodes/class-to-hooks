# Lesson Seventeen

Now that you have a component for the home page, we are going to add the necessary code for routing, which allow you to set up multiple pages in your project. This is accomplished in React through the help of the npm package (node module) React Router Dom. It has already been added to this template, as well as the other templates you have access to on the shared drive.

## Directions

1. Open App.js. On line 1, above the import of your Home component, add this code: `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';` BrowserRouter (which we renamed to Router), Routes, and Route are the necessary components to set up each route that you need.

2. Delete the Home component for now.

3. Add the opening and closing tags for <Router>. 

3. Add the opening and closing tags for <Routes> as a child of <Router>. 

4. Add a self-closing <Route> as a child of <Routes>.

5. On your <Route>, add an attribute called path and set it equal to '/'.

6. Add anoter attribute called element and set it equal to {<Home />}

If written correctly, your page should show the home component.

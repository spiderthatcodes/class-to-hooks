# Lesson Nineteen

In this lesson, you are going to add a navbar to your example project. This differs from the Home and Books components because you want to see it on all pages.

# Directions

1. Create a new folder in components called Nav. Add a Nav component file and css file to the folder.

2. In regular html, links are handled with <a> tags. React router dom has the <Link> element. At the top of your Nav component, add the code `import { Link } from 'react-router-dom';`.

3. Your nav must contain a link to home and a link to the books page. Below is an example of a <Link> to home.

`<Link to='/'>Home</Link>`

4. In App.js, import your Nav component. If you place the Nav as a self closing tag below <Router> but above <Routes>, it will appear on every page of your project.

5. Style the nav to your taste.

6. If you like, you can also add a Footer component by following the same approximate directions.

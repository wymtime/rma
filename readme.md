The application is built with React and Redux. React is more than
enough to accomplish the core functionality, but I wanted to give
you an idea of how I structure an application when using both  libraries. Webpack is used to handle bundling and transpilation. Lastly, I used styled components to familiarize myself with a new styling methodology.

For the design, ui changes are handled by each components internal state. The exception is hiding/revealing the content component when clicking the '-/+' sign. For this, I used a toggle content action to facilitate communication between the header and content components. A Redux thunk is used to handle a mock fetch that populates the initial application state.

# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    The literal difference is that one has state, and the other doesn't. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing. Notice the stateless component is written as a function.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount() is invoked immediately before mounting occurs.
    componentWillUpdate() is called every time a re-render is required, such as when this. setState() is called.

3. Define stateful logic.

    Stateful logic refers to a form of computational logic in which the same devices both store logic values and perform logical operations. 

4. What are the three step of creating a successful test? What is done in each phase?

    1. Arange: with The render method,  renders a React element into a virtual DOM
    2. Act: "query" the DOM for a specific node by its text that we expect to see in the browser.
    3. Assert: information is render .

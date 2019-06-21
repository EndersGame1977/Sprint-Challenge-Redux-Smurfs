1.  a.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?         
    b.  Which method do we use to create a new object while extending the properties of another object?
            a.  .map(), .forEach(), .every()
            b.  Object.create()

2.  a.  Describe `actions`, `reducers` and the `store` and their role in Redux. 
    b.  What does each piece do? 
    c.  Why is the store known as a 'single source of truth' in a redux application?

            a&b.    action:     describe what happened 
                    reducers:   specify how state changes in response to action
                    store:      contains the state
            c.      The store is the single source of state.


3.  a.  What is the difference between Application state and Component state? 
    b.  When would be a good time to use one over the other?

            a.  Application state is global, and component state is local.
            b.  If you want any component to access the state, use application state.
                If you want just one component to access the state, use component state.

4.  What is middleware?

        Code you can put between the framework receiving a request, and the framework generating a response.

5.  a.  Describe `redux-thunk`, what does it allow us to do? 
    b.  How does it change our `action-creators`?

            a&b.    Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.  


6.  Which `react-redux` method links up our `components` with our `redux store`?

        connect()
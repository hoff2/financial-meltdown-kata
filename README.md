## React Redux Skeleton


### Description

A common technical stack in enterprise frontend development is:

* ReactJS (core framework) https://reactjs.org/
* Redux (state management) https://react-redux.js.org/
* tcomb (type management and object validation) https://github.com/gcanti/tcomb
* mocha or jest (unit and integration testing) https://jestjs.io/
* cypress or puppeteer (e2e and/or acceptance testing) https://www.cypress.io/
* reliance on backend systems, commonly either Python or Java Spring, supplying REST endpoints
* reliance on some kind of external authentication (not addressed in this skeleton but may have ramifications when communicating with REST endpoints)


### Problem

It's easy to understand each of the components of the technical stack in terms of their functionality, syntax, and idioms.  You can do katas on each of them individually to learn those aspects, and to drive changes with testing.  

What we've seen in engagements, however, is that skilled artisans can become lost when test driving features and changes in the midst of all the pieces moving together.  Challenges will appear if you:

* don't understand the architecture and lifecycle of the frameworks
* how they interact with other frameworks in a running system
* don't take a methodical approach to driving in change

Pairs can struggle for days when they try to drive changes into too many phases of a framework's lifecycle at the same time.  They can get lost in similar names, confusion over which function does what, puzzling through how to write tests that are valuable, and events flying every which way.

Pairs can also become puzzled as an object moves through the frontend lifecycle, leaves the frontend through an API call, passes through a backend system, and returns to the frontend in an updated form.  For example, if a property can be null in the backend, how will it be handled by deserialization, type management, validation, and state updates on the frontend?

Some other questions you may encounter as you work in large or growing systems:

* What's the right mix of testing strategies?  To add a feature?  To drive in a change?
* How should you organize your source code?  
* What choices should you make if you are confronted with an ambiguous contract versus backend endpoints?
* How do your choices change if several pairs are working in the same code?  Several teams?  Dozens of teams?
* How do you avoid breaking changes in a continous delivery/deployment scenario?


### Hypothesis

You can safely and quickly make changes to systems with complex lifecycles by working your way around the lifecycle methodically, using test strategies that provide value and a safety net that tracks your movements.

A common challenge is adding a feature to a ReactJS app using Redux.  Pairs who try to add too many of the Redux pieces at the same time can find they spend a lot time debugging what should be working code.  A methodical TDD strategy can overcome this.

Depending on your project's overall test matrix, you can accomplish this with unit tests, integration tests, or a combination of both.

A reasonable rule of thumb to add a feature involving the Redux lifecycle is that you'll end up with on the order of 4 unit tests for each 1 or 2 integration or e2e tests.


#### Unit Testing and/or integration

Think of the Redux lifecycle as starting with the Store.  State is maintained there.  You provide properties from this state to the View, where you display it.  When you click a button to perform an operation or change a value, you may want to update the state either directly with the new value, or with the response from an API call.  So you call an Action Creator.  The action creator may or may not call an API to send or retrieve some data, but will almost always emit one or more events.  Those events are "heard" by one or more reducers which will use tcomb to return state updates based on the events' payload.


### Stories

You are asked to add features, make changes, and fix defects in a continuously deployed enterprise application.  Internal representives use it to keep track of customers and items that they've financed.  Currently, users can update customer details, add financed items, and update the backend systems with changes.  Once a financed item has been processed by the backend, it can no longer be modified.


#### Story US10111 - Delete Financed Item

As a user, I want to delete financed items, so that customers aren't billed for things they didn't purchase

Given a financed item exists
When I delete it
Then it is removed from display
And that removal is persisted


#### Story US10112 - Add Postal Code

As a user, I want to store the customer's postal code, so that bills can be sent to a deliverable address

Given I have set the customer's postal code
When I update the customer details
Then the postal code is persisted

Tech Note:  This property will be added to both the frontend and backend.


#### Story DE10113 - Rate to Interest Rate

Defect: In all places where Rate appears or is referenced in source code, it should be called Interest Rate or interestRate instead.  On the frontend, just indicating Rate does not comply with federal regulations.  On the backend, nightly batch processing systems do not recognize the 'rate' property.

Tech Note:  Backward compatibility must be maintained for instances of the frontend that may still send the property in requests as 'rate' rather than 'interestRate.'


### Outcome

Stories like these, taken together, would typically be of medium, small, and small t-shirt sizes respectively. You should be able to complete any of the cards in X hours.

When you've completed all the cards, you will know how to:

* Add a feature by test driving all of the necessary pieces of ReactJS, Redux, and tcomb
* Add a property to existing domain and data transfer objects
* Change a property in the domain and data transfer objects while maintaining backward compatibility 


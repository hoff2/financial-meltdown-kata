## React Redux Skeleton


### Description

A common technical stack in enterprise frontend development is:

* ReactJS (core framework) https://reactjs.org/
* Redux (state management) https://react-redux.js.org/
* tcomb (type management and object validation) https://github.com/gcanti/tcomb
* fetch or axios (REST api calls)
* toast (on screen informational or error notifications)
* mocha or jest (unit and integration testing) https://jestjs.io/
* cypress or puppeteer (e2e and/or acceptance testing) https://www.cypress.io/
* reliance on backend systems, commonly either Python or Java Spring, supplying REST endpoints
* reliance on some kind of external authentication (not addressed in this skeleton but may have ramifications when communicating with REST endpoints)

This project implements a very simplistic single page web app.  It relies on ReactJS,
Redux, tcomb, fetch, toastify, jest, and cypress.  No UI frameworks such as Material
Design or Bootstrap are used.

It permits the user to maintain a single customer, with their details and their
financed items, which is persistd in a simple backend server implemented in
Java and Spring Boot.

#### Start the Frontend App
```npm run start```

#### Unit Test the Frontend App
```npm run test```

#### Acceptance Test the Frontend App
Run the backend and frontend before running this command:

```./node_modules/.bin/cypress open```

#### Start the Backend App
A simplistic script is provided that will build the backend, build a Docker
image, and start up a container from it:
```./run_server.sh```

#### Unit and Integration Test the Backend App
```./mvnw test```

#### Stop the Backend App
```docker ps```
(find the hash for your running container)
```docker stop [hash]```
```docker rm [hash]```

### Problem

It's easy to understand each of the components of the technical stack 
in terms of their functionality, syntax, and idioms.  You can do katas 
on each of them individually to learn those aspects, and to drive changes 
with testing.  

What we've seen in engagements, however, is that skilled artisans can become 
lost when test driving features and changes in the midst of all the pieces 
moving together.  Challenges will appear if you:

* don't understand the architecture and lifecycle of the frameworks
* how they interact with other frameworks in a running system
* don't take a methodical approach to driving in change

Pairs can struggle for hours or even days when they try to drive changes 
into too many phases of a framework's lifecycle at the same time.  They can 
get lost in similar names, confusion over which function does what, 
puzzling through how to write tests that are valuable, and events 
flying every which way.

Pairs can also become puzzled as an object moves through the frontend lifecycle, 
leaves the frontend through an API call, passes through a backend system, and 
returns to the frontend in an updated form.  For example, if a property can be 
null in the backend, how will it be handled by deserialization, type management, 
validation, and state updates on the frontend?

Finally, pairs can spend their time tediously building similar features over and
over, rather than moving through them quickly so that new value can be explored
and added.

Some questions you may encounter as you work in large or growing systems:

* What's the right mix of testing strategies?  To add a feature?  To drive in a change?
* How should you organize your source code?  
* What choices should you make if you are confronted with an ambiguous contract 
versus backend endpoints?
* How do your choices change if several pairs are working in the same code?  
Several teams?  Dozens of teams?
* How do you avoid breaking changes in a continous delivery/deployment scenario?


### Hypothesis

You can safely and quickly make changes to systems with complex lifecycles 
by working your way around the lifecycle methodically, using test strategies 
that provide value and a safety net that tracks your movements.

A common challenge is adding a feature to a ReactJS app using Redux.  Pairs 
who try to add too many of the Redux pieces at the same time can find they 
spend a lot time debugging what should be working code.  A methodical TDD 
strategy can overcome this.

Depending on your project's overall test matrix, you can accomplish this 
with unit tests, integration tests, acceptance/e2e tests, or a combination.

A reasonable rule of thumb to add a feature involving the Redux lifecycle 
is that you'll end up with on the order of 4 unit tests for each 1 or 2 integration 
or e2e tests.


#### Unit Testing and/or integration

Think of the Redux lifecycle as starting with the Store.  State is maintained 
there.  You provide properties from this state to the View, where you display 
it.  When you click a button to perform an operation or change a value, you 
may want to update the state either directly with the new value, or with the 
response from an API call.  So you call an Action Creator.  The action 
creator may or may not call an API to send or retrieve some data, but 
will almost always emit one or more events.  Those events are "heard" by 
one or more reducers which will use tcomb to return state updates based 
on the events' payload.

Most of kata exercises can be completed methodically by following something
like the following process:

1. Write an acceptance test that will demonstrate you've met acceptance
criteria for both frontend and backend, as necessary
2. Unit or integration test drive changes into the View.  Provide empty
functions as properties if necessary.
3. Unit or integration test drive changes into Action Creators.  Provide
empty or stubbed API calls if necessary.  
4. Wire a new action creator to the view through the Connector if necessary.
5. Unit or integration test drive changes into API calls.  (You may find it
easier to swap the order of playing #3 and #5.)
6. Unit or integration test drive changes into Reducers.  Make sure your
actions match in your action creator and your reducer.
7. Wire your reducer into combineReducers if necessary.
8. Your acceptance test should now pass unless it relies on changes to the
backend.  If so drive changes into your backend.

Obstacles that will trip you up:
* Views, action creators, actions, reducers can end up with very similar names.
Watch out for imports pointing to the wrong thing.  Typically, you'll see
error complaints about your call signature when this happens.
* Don't feel compelled to test that an action emitted by your action creator 
is received by a reducer.  Are you testing your code or the framework?


### Kata Exercises

You are asked to add features, make changes, and fix defects in a continuously 
deployed enterprise application.  Internal representives use it to keep track 
of customers and items that they've financed.  Currently, users can update 
customer details, add financed items, and update the backend systems with 
changes.  Once a financed item has been processed by the backend, it can no 
longer be modified.


#### Kata Exercise #1 - Add Postal Code

As a user, I want to store the customer's postal code, so that bills can be sent 
to a deliverable address

Given I have set the customer's postal code
When I update the customer details
Then the postal code is persisted

Tech Note:  This property will be added to both the frontend and backend.


#### Kata Exercise #2 - Rate to Interest Rate

Defect: In all places where Rate appears or is referenced in source code, 
it should be called Interest Rate or interestRate instead.  On the frontend, 
just indicating Rate does not comply with federal regulations.  On the backend, 
nightly batch processing systems do not recognize the 'rate' property.

Tech Note:  Backward compatibility must be maintained for instances of the 
frontend that may still send the property in requests as 'rate' rather than 
'interestRate.'


#### Kata Exercise #3 - Delete Financed Item

As a user, I want to delete financed items, so that customers aren't billed for 
things they didn't purchase

Given a financed item exists
When I delete it
Then it is removed from display
And that removal is persisted


### Outcome

Stories like these, taken together, would typically be of medium, small, 
and small t-shirt sizes respectively (when compared to each other).

Your goal should be to complete Exercises #1 and #2 in 30 minutes or less.
And to complete Exercise #3 in 1 hour or less.

When you've completed all the cards, you will know how to:

* Add a feature by test driving all of the necessary pieces of ReactJS, Redux, and tcomb
* Add a property to existing domain and data transfer objects
* Change a property in the domain and data transfer objects while maintaining backward compatibility 


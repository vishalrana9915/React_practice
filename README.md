#React practice project.


[we are using webpack for module bundling.]

#To run the project..Go to the root directory using your terminal and enter [npm start.]

The webpack will start bundling the modules and it will create a bundle.js file that we will be needing for UI.




#A brief introduction to react

In this introduction,we will simply learn about the architecture,internal working ,data flow ,working of redux ,reducer ,store and routing analysis.


-----------------Hang on tight -----------------------------------
React is fast. It uses the virtual DOM to track the state of the actual DOM, only re-rendering discrete sections of the DOM as changes to application state dictate

[Virtual dom]-----
React offers a virtual dom.For virtual dom we can say that it just create an exact copy of the actual dom.

If you do any changes or if i say if you do any manipulation to the virtual dom,it first compare it with the previous dom and check if all the nodes are same and if not then it will manipulate only those changes to the actual dom.

This saves us a lot of time and infact directly dealing with the actual dom is kind of expensive if you have a big application to run.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 "Data Down Actions Up"

There are four phases in an react application:
1)Initial.
2)Mounting
3)Updating
4)Unmounting






Actions------

Actions are JSON objects that contain information about changes that need to be made to state. They can be dispatched by various parts of your application, and they are received by the store.

Actions are produced by functions called action creators.

Store--------

The store holds the whole state our application. It can dispatch actions and it receives actions that are dispatched to it. However, the store doesn't want to handle the dispatched actions and actually enact changes to state. For that, we use reducers.

Reducers-------

The store passes dispatched actions to reducers, which receive the actions and make the appropriate changes to state.

Components-----

Components are the presentation, or view, layer of our application. Certain components, the parent or container components, will be connected to our store. Those components will be alerted whenever a change to state has been made by a reducer. Those components will then re-render, with new properties as dictated by the changes made to application state.

-------------------------------------------------------------------------------------------
These modules help us to maintain routing in our react app:
import { render } from 'react-dom';  
import { Router, browserHistory } from 'react-router'; 
-------------------------------------------------------------------------------------------


IN our main file Index.js

render(  
 <Router history={browserHistory} routes={routes} />,
 document.getElementById('app')
);

we use browserhistory with router.
BrowserHistory: Note that we're using browserHistory as our Router's history. browserHistory is the recommended history for URL manipulation with React Router, allowing us to build semantic URLs that look like /cats/new or cats/7.




@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Below the desc of how to request data using api call@@@@@@@@@@@


1)Store dispatch an action that makes an api request,When that request get resolved another action got dispatch.
2)The store will recieve the new action dispatch,we we got the response from the api request.
3)The store will tell the reducer to handle that action.
4)The reducer returns the new ,updated copy of that state
5)New state send to all the components connected to store,triggering them to re-render the updated data.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


We use redux to create a store.

	import {createStore, applyMiddleware} from 'redux'; 








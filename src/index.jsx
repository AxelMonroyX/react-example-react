/*import React from 'react'
import {
  render
} from 'react-dom'
import {
  browserHistory
} from 'react-router'
import {
  syncHistoryWithStore  
} from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
console.log("wololo   dasadsd")
const store = configureStore() 
const history = syncHistoryWithStore(browserHistory, store)*/
import React from 'react'
const element = (
  <h1>
    Hello,
  </h1>
);
render(
  /*  <Root store={store } history={history} />,
   */
 
  element,
  document.getElementById('root')

)

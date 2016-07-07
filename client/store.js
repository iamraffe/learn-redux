import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index'

import comments from 'data/comments'
import posts from './data/posts'

//crate an object for the default data
const defaultState = {
  posts,
  comments
}

export default const store = createStore(rootReducer, defaultState)

export default const history = syncHistoryWithStore(browserHistory, store)
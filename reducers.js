import {combineReducers} from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
// import {default as testReducer} from './test'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // test: testReducer
})

export default rootReducer
import { combineReducers } from "@reduxjs/toolkit"

// import authReducer from "../slices/authSlice"
import registerReducer from "../slices/registerSlice"


const rootReducer = combineReducers({
//   auth: authReducer,
  register: registerReducer,
})

export default rootReducer

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    registerData:null,
}

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    setRegisterData(state, value) {
      state.registerData = value.payload;
    }, 
  },
})

export const { setRegisterData} = registerSlice.actions;
export default registerSlice.reducer
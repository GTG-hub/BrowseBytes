import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    access_token: null,
}

const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken : (state, action) =>{
        state.access_token = action.payload.access_token
    },
    remToken: (state, action) => {
        state.access_token = action.payload.access_token
    }
  },
})

export const { setToken, remToken } = authSlice.actions
export default authSlice.reducer
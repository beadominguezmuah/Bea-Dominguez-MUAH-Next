import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 5,
}

const dataApiSlice = createSlice({
  name: 'dataApi',
  initialState,
  reducers: {
    filterGrooming(state){
        state.data = 10
    }
  }
});

export const {} = dataApiSlice.actions

export default dataApiSlice.reducer
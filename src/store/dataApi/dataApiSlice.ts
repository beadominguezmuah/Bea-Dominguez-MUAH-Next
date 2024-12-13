import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 5,
}

const dataApiSlice = createSlice({
  name: 'dataApi',
  initialState,
  reducers: {
    allData(state){
      state.data -= 1
    }
  }
});

export const {allData} = dataApiSlice.actions

export default dataApiSlice.reducer
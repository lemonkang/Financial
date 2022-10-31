import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: false

}
const tallySlice = createSlice({
  name: 'tally',
  initialState,
  reducers: {
    add: (state, actions) => {
      console.log('====================================')
      console.log('actions', actions)
      console.log('====================================')
      state.test = actions.payload


    }

    
  }
})
export const tally = tallySlice.reducer

export const tallyActions = tallySlice.actions

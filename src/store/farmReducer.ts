import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  selectFarm: Object
  isSelect: boolean
}

const initialState: CounterState = {
  selectFarm: {},
  isSelect : false
}

export const farmrSlice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    selectFarm: (state, action: PayloadAction<number>) => {
      state.isSelect = true
      state.selectFarm = action.payload
      console.log(state.selectFarm)
    },
  },
})

export const { selectFarm } = farmrSlice.actions

export default farmrSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  selectFarm: Object
  listFarms:[]
  isSelect: boolean
}

const initialState: CounterState = {
  selectFarm: {},
  listFarms:[],
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
    fletchFarm: (state, action: PayloadAction<[]>) => {
      state.isSelect = true
      state.listFarms = action.payload
      console.log(state.selectFarm)
    },
  },
})

export const { selectFarm ,fletchFarm} = farmrSlice.actions

export default farmrSlice.reducer
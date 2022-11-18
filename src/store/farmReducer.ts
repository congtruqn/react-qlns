import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type Farm = {
  id:string,
  name:string
}
export interface CounterState {
  selectFarm: Farm
  listFarms:[]
  isSelect: boolean
}

const initialState: CounterState = {
  selectFarm: JSON.parse(localStorage.getItem("selectfarm")) ? JSON.parse(localStorage.getItem("selectfarm")):{},
  listFarms:JSON.parse(localStorage.getItem("listfarms")) ? JSON.parse(localStorage.getItem("listfarms")):[],
  isSelect : false
}

export const farmrSlice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    selectFarm: (state, action: PayloadAction<Farm>) => {
      state.isSelect = true
      let user = {
        id:action.payload.id,
        name:action.payload.name
      }
      state.selectFarm = user
      localStorage.setItem("selectfarm", JSON.stringify(user));
    },
    fletchFarm: (state, action: PayloadAction<[]>) => {
      state.isSelect = true
      state.listFarms = action.payload;
      localStorage.setItem("listfarms", JSON.stringify(action.payload));
    },
  },
})

export const { selectFarm ,fletchFarm} = farmrSlice.actions

export default farmrSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    showPlayer: false,
    sound:{}
  },
  reducers: {
   
    showPlayer: (state) =>{
      state.showPlayer = true;
    },
    setSound: (state,actions)=>{
      state.sound = actions.payload;
    }
  },
});

export const { showPlayer,setSound } = playerSlice.actions;
export default playerSlice.reducer;

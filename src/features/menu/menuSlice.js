import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isShow: false,
  },
  reducers: {
    showMenu: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { showMenu } = menuSlice.actions;
export default menuSlice.reducer;

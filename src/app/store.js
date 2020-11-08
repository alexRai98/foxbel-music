import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import searchReducer from '../features/navbar/searchSlice';
import playerReducer from '../features/player/playerSlice';

export default configureStore({
  reducer: {
    menu: menuReducer,
    search: searchReducer,
    player: playerReducer
  },
});

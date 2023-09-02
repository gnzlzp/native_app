import { createSlice } from '@reduxjs/toolkit'
import { listMan } from '../assets/listMan'

const listManSlice = createSlice({
  name: 'listMan',
  initialState: listMan,
  reducers: {
    setListMan: (state, action) => {
      state.items = action.payload;
    },
    updateItemAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.answer = answer;
      }
    }
  },
});

export const { setListMan, updateItemAnswer } = listManSlice.actions;
export default listManSlice.reducer;

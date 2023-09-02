import { createSlice } from '@reduxjs/toolkit';
import { listInspec } from '../assets/listInspec';


const listInspecSlice = createSlice({
  name: 'listInspec',
  initialState: listInspec,
  reducers: {
    setListInspec: (state, action) => {
      state = action.payload;
    },
    updateItemAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.answer = answer;
      }
    },
  },
});

export const { setListInspec, updateItemAnswer } = listInspecSlice.actions;
export default listInspecSlice.reducer
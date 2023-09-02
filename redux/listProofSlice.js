import { createSlice } from "@reduxjs/toolkit";
import { listProof } from "../assets/listProof";

const listProofSlice = createSlice({
  name: "listProof",
  initialState: listProof,
  reducers: {
    updateItemAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.answer = answer;
      }
    }

  }

}
);
export const { updateItemAnswer } = listProofSlice.actions;
export default listProofSlice.reducer;

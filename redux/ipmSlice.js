import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const activitiesSlice = createSlice({
  name: 'ipm',
  initialState,
  reducers: {
    inspection: (state, action) => {
      state.act1 = action.payload
    },
    prueba: (state, action) => {
      state.act2 = action.payload
    }

  }
})

export const { inspection } = activitiesSlice.actions
export default activitiesSlice.reducer
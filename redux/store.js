import { configureStore } from '@reduxjs/toolkit'
import listInspecSlice from './listInspecSlice'
import listManSlice from './listManSlice'
import listProofSlice from './listProofSlice'


const store = configureStore({
  reducer: {
    listInspec: listInspecSlice,
    listMan: listManSlice,
    listProof: listProofSlice,
  },
});

export default store;

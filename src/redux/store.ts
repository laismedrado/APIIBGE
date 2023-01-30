import { configureStore } from "@reduxjs/toolkit";
import IBGEstatesReducer, {
  IBGEstatesFetch,
} from "../redux/slices/IBGEstatesSlice";
import cityReducer from "../redux/slices/citySlice";
import dataCardReducer from "../redux/slices/dataCardSlice";

export const store = configureStore({
  reducer: {
    estados: IBGEstatesReducer,
    cidades: cityReducer,
    info: dataCardReducer,
  },
});

store.dispatch(IBGEstatesFetch());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

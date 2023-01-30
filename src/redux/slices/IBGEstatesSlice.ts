import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { IBGEstatesTypes } from "../../model/IBGEstatesTypes";

interface EstadoSliceType {
  estados: IBGEstatesTypes[];
  status: string | null;
}

const initialState: EstadoSliceType = {
  estados: [],
  status: "",
};

export const IBGEstatesFetch = createAsyncThunk(
  "estados/estadosFetch",
  async () => {
    try {
      const response = await Api.get("estados/?orderBy=nome");
      if (response.status === 200) {
        const data = (await response.data) as IBGEstatesTypes[];
        return data;
      }
    } catch (error) {}
  }
);

export const estadosSlice = createSlice({
  name: "estados",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(IBGEstatesFetch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(IBGEstatesFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(IBGEstatesFetch.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.estados = action.payload as IBGEstatesTypes[];
    });
  },
});

export default estadosSlice.reducer;

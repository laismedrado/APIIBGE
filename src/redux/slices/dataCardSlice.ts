import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { CityDataTypes } from "../../model/cityTypes";

interface InfoSliceType {
  info: CityDataTypes;
  status: string | null;
}

const initialState: InfoSliceType = {
  info: {} as CityDataTypes,
  status: "",
};

export const dataFetch = createAsyncThunk(
  "cidades/infoFetch",
  async (id: string) => {
    try {
      const response = await Api.get(`municipios/${id}/distritos?orderBy=nome`);
      if (response.status === 200) {
        const data = (await response.data[0]) as CityDataTypes;
        return data;
      }
    } catch (error) {}
  }
);

export const dataCitySlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(dataFetch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(dataFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(dataFetch.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.info = action.payload as CityDataTypes;
    });
  },
});

export default dataCitySlice.reducer;

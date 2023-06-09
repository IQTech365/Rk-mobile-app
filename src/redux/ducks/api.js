import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    isFetching: false,
    success: null,
    error: null,
    data: null,
    type: null,
  },
  reducers: {
    api(state, action) {
      return {
        ...state,
        isFetching: true,
        type: action.type,
      };
    },
    apiSuccess(state, action) {
      return {
        ...state,
        success: true,
        data: action.payload,
        type: action.type,
      };
    },
    apiError(state, action) {
      return {
        ...state,
        error: action.payload,
        type: action.type,
      };
    },
    apiInit(state, action) {
      return {
        ...state,
        isFetching: false,
        success: null,
        error: null,
        data: null,
        type: null,
      };
    },
  },
});

export const { api, apiSuccess, apiError, apiInit } = apiSlice.actions;

export default apiSlice.reducer;

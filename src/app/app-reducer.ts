import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//rtk
const slice = createSlice({
  name: 'app',
  initialState: {
    isAppInitialized: false,
    isEmployeeSelected: false,
  },
  reducers: {
    changeAppInitializedStatus: (
      state,
      action: PayloadAction<{ status: boolean }>
    ) => {
      state.isAppInitialized = action.payload.status;
    },
    changeIsEmployeeBeenSelected: (
      state,
      action: PayloadAction<{ status: boolean }>
    ) => {
      state.isEmployeeSelected = action.payload.status;
    },
  },
});

//action and reducer
export const appReducer = slice.reducer;
export const appActions = slice.actions;

//thunk

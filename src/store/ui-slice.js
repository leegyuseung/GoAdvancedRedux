import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVislbie: false, // 장바구니 표시여부
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartIsVislbie = !state.cartIsVislbie;
    },
    showNotification(state, action) {
      state.notification = {
        state: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

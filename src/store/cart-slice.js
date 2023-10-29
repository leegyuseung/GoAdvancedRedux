const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVislbie: false, // 장바구니 표시여부
  },
  reducers: {
    toggle(state) {
      state.cartIsVislbie = !state.cartIsVislbie;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

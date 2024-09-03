const wishlist = (
  state = JSON.parse(localStorage.getItem("wishlist")) || [],
  action
) => {
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index < 0) {
        state = [...state, action.payload];
      } else {
        state = state.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export default wishlist;

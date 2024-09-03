const cart = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  const index = state?.findIndex((item) => item.id === action?.payload?.id);
  switch (action.type) {
    case "ADD_TO_CART":
      if (index < 0) {
        state = [...state, { ...action.payload, quantity: 1 }];
        saveStorage(state);
        return state;
      }
    case "INC_CART":
      state = state?.map((item, idx) =>
        idx === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveStorage(state);
      return state;

    case "DEC_CART":
      state = state?.map((item, idx) =>
        idx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      saveStorage(state);
      return state;
    case "REMOVE_CART":
      state = state.filter((item) => item.id !== action.payload.id);
      saveStorage(state);
      return state;
    case "REMOVE_ALL":
      state = [];
      saveStorage(state);
      return state;

    default:
      return state;
  }
};
export default cart;

function saveStorage(data) {
  localStorage.setItem("cart", JSON.stringify(data));
}

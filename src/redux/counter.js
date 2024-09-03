const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return (state = state + 1);
    default:
      return state;
  }
};
export default counter;

const token = (state = localStorage.getItem("token") || null, action) => {
  switch (action.type) {
    case "LOGIN":
      state = action.payload;
      localStorage.setItem("token", state);
      return state;

    case "LOGOUT":
      state = null;
      localStorage.setItem("token", state);
      return state;
    default:
      return state;
  }
};

export default token;

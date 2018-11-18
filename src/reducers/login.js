const login = (state = 'guest', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.name;
    default:
      return state;
  }
};

export default login;

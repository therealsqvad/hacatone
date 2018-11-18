const login = (state = 'guest', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    default:
      return state;
  }
};

export default login;

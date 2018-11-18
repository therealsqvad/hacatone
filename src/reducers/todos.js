const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    {
      console.log('add todo');
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          deadline: action.deadline,
          description: action.description,
          completed: false
        }
      ]; }
    case 'TOGGLE_TODO':
      return state.map(todo => ((todo.id === action.id) ?
        { ...todo, completed: !todo.completed } :
        todo));
    case 'INIT': {
      console.log(action.todos);

      return action.todos;
    }
    default:
      return state;
  }
};

export default todos;

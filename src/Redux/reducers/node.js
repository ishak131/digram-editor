const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_NODE_TYPE':
      return action.payload.Node;
    case 'REMOVE_NODE_TYPE':
      return null;
    default:
      return state;
  }
};

export default authReducer;

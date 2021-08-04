
const setNode = (Node) => {
  return {
    type: 'SET_NODE_TYPE'
    , payload: {
      Node
    }
  };
};

const removeNode = () => {
  return {
    type: 'REMOVE_NODE_TYPE'
  };
};

export { setNode, removeNode };

const WatchListReducer = (state = [], action, element) => {
  switch (action.type) {
    case "ADD":
      return state.concat(element);
    default:
      return state;
  }
};

export default WatchListReducer;

function postReducer(state = [], action) {
  switch (action.type) {
    case 'INCRESEMENT_LIKES':
      // console.log("INCRESEMENT_LIKES");
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1 },
        ...state.slice(i+1)
      ]
    default:
      return state;
  }

 }

export default postReducer;

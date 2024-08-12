function reducer(state, dispatch) {
    if(dispatch.type == 'increment'){
        return state.count = state.count+1

    }
    if (dispatch.type == 'decrement') {
        return state.count = state.count+1
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    );
  };
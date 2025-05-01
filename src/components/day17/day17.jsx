import React, { useReducer } from 'react';
import Usememocomp from './memorization';

const initialState = {
  age: 17,
  salary: 20000,
  name: "john"
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, age: state.age + action.payload };
    case "decrement":
      return { ...state, age: state.age - action.payload};
    case "incrementsal":
      return { ...state, salary: state.salary + 1000 };
    case "decrementsal":
      return { ...state, salary: state.salary - 1000 };
    case "updatename":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function Day17() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchAction = (type,payload) => dispatch({ type,payload });

  return (
<>
<div>
    memorization
    <Usememocomp/>


</div>
    <div style={{ padding: '20px' }}>

      <h3>Age: {state.age}</h3>
      <button onClick={() => dispatchAction("increment",1)}>Increase Age</button>
      <button onClick={() => dispatchAction("decrement",1)}>Decrease Age</button>

      <h3>Salary: ₹{state.salary}</h3>
      <button onClick={() => dispatchAction("incrementsal")}>Increase Salary</button>
      <button onClick={() => dispatchAction("decrementsal")}>Decrease Salary</button>

      <h3>Name: {state.name}</h3>
      <button onClick={() => dispatchAction("updatename","jessy")}>Change Name</button>
    </div>
    </>

  );
}

export default Day17;

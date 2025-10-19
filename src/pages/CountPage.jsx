import Count from "../components/Count";
import { useReducer } from "react";

export const INITIAL_STATE = {
  count: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default function CountPage() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <>
      <div>
        <p>{state.count}</p>
        <div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      </div>
    </>
  );
}

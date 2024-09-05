import "./App.css";
import { useReducer } from "react";

// useState, useEffect( celanup) , useREducer (userQuery), useRef, useCallback, useMemo, useContext

function reducer(state, action) {
  console.log({ state, action });
//   if (action.type === "increment") {
//     return state + 1;
//   } else if (action.type=== "decrement") {
//     return state - 1;
//   }
  switch (action.type) {
    case "increment":
        return {count:state.count+1}
    case "decrement":
        return {count:state.count-1}
}
throw Error ('unknown Action :'+ action.type);
}




function CounterRedObj() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  const incrementCountByOne = () => {
    // setcount(count + 1)
    dispatch({type:"increment"});
  };

  const decrementCountByOne = () => {
    // setCount(count - 1);
    dispatch("decrement");
  };

  return (
    <>
      <button
        style={{
          color: "red",
        }}
        onClick={incrementCountByOne}
      >
        +
      </button>
      <p>Count: {state.count}</p>
      <button onClick={decrementCountByOne}>-</button>
    </>
  );
}

export default CounterRedObj;
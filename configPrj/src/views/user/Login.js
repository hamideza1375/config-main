import { useReducer } from "react";
import { Button, Column } from "../../other/Components/Html";


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => dispatch({ type: "INCREMENT", payload: 1 });
  const decrement = () => dispatch({ type: "DECREMENT", payload: 1 });

  return (
    <Column>
      <Button onClick={increment}>INCREMENT</Button>
        <Column>{state.count}</Column>
      <Button onClick={decrement}>DECREMENT</Button>
    </Column>
  );
};

export default Login;

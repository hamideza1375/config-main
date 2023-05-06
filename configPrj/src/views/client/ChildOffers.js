import { useEffect, useReducer } from "react";
import { Column, P } from "../../other/Components/Html";


const categoryReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};


const categoryAction = async (dispatch)=> dispatch({type: "INCREMENT", payload: 2 })


const Login = () => {
  const [state, dispatch] = useReducer(categoryReducer, { count: 0 });


  useEffect(() => {
    categoryAction(dispatch)
  }, []);



  return (
    <Column>
        <P>{state.count}</P>
    </Column>
  );
};

export default Login;

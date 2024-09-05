//  import { useState,useEffect, useReducer } from "react";

//  export const useQuery = (apiEndPoint) => {
//     // const [data, setData] = useState([]);
//     // const [state, setState] = useState("loading");
//     // const [error, setError] = useState(null);

//     function reducer(state,action){
//       switch(action.type){
//         case"DATA_FETCHED":
//         return {state:"success",data:action.data };
//         case"ERROR":
//         return { state:"error",data:null,error:action.error}
//         }
//       }
//      }

//     const [state,dispatch]=useReducer(reducer,{
//       data:[],
//       state:"loading",
//       error:null,
//     })
//     useEffect(() => {
//       const getData = async () => {
//         try {
//           const res = await fetch(apiEndPoint);
//           const resData = await res.json();
//           // setData(resData);
//           // setState("Success");

//           dispatch({type:"DATA_FETCHED",data:resData});

//         } catch (error) {
//           // setError(error.message);
//           // setState("Error");
//           dispatch({type:"ERROR",error:error.message});
//         }
//       };
//       getData();
//     }, [apiEndPoint]);

//     return {{  state};
//   };

import { useEffect, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "DATA_FETCHED":
      return { ...state, status: "success", data: action.data };
    case "ERROR":
      return { ...state, status: "error", data: null, error: action.error };
  }
}
export function useQuery(apiEndPoint) {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    status: "loading",
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(apiEndPoint);
        const resData = await res.json();

        dispatch({ type: "DATA_FETCHED", data: resData });
      } catch (error) {
        dispatch({ type: "ERROR", error: error.message });
      }
    };
    getData();
  }, [apiEndPoint]);

  return state;
}

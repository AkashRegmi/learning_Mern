// import { useState, useEffect } from "react";

// const useQuery(apiEndPoint){
//   const [data, setData] = useState([]);
//   const [state, setstate] = useState("loading");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     //first the loading State
//     //Second the Api calling
//     const getData = async () => {
//       try {
//         const res = await fetch(apiEndPoint);
//         const resData = await res.json();
//         setData(resData);
//         setstate("Success");
//       } catch (error) {
//         setError(error.message);
//         setstate("Error");
//       }
//     };
//     getData();

//     // fetch("https://dummyjson.com/products")
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //     setProducts(data.products); // Correct placement of setProducts
//     //     setstate("Success")
//     //   }).catch((err) => {
//     //     setError(err.message);
//     //     setstate("Error");
//     //   })
//     //   ;
//   }, [apiEndPoint]);
//   return {data,state,error}
// }

// export function Products() {
//   // const [products, setProducts] = useState([]);
//   // const [state, setstate] = useState("loading");
//   // const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   //first the loading State
//   //   //Second the Api calling
//   //   const getProducts = async () => {
//   //     try {
//   //       const res = await fetch("https://dummyjson.com/products");
//   //       const data = await res.json();
//   //       setProducts(data.products);
//   //       setstate("Success");
//   //     } catch (error) {
//   //       setError(error.message);
//   //       setstate("Error");
//   //     }
//   //   };
//   //   getProducts();

//   //   // fetch("https://dummyjson.com/products")
//   //   //   .then((res) => res.json())
//   //   //   .then((data) => {
//   //   //     console.log(data);
//   //   //     setProducts(data.products); // Correct placement of setProducts
//   //   //     setstate("Success")
//   //   //   }).catch((err) => {
//   //   //     setError(err.message);
//   //   //     setstate("Error");
//   //   //   })
//   //   //   ;
//   // }, []); // Adding an empty dependency array to run effect only on mount
//   const {data,state,error}=useQuery("https://dummyjson.com/products");

//   return (
//     <>
//       <h1>Products</h1>
//       {state === "error" && <p> Eror</p>}
//       {state === "loading" && <p>Loading........</p>}
//       <ul>
//         {state === "Success" &&
//           data.products.map(({ id, title }) => <li key={id}>{title}</li>)}
//       </ul>
//     </>
//   );
// }
import { useQuery } from "./hooks/useQuery";

export function Products() {
  const { data, state, error } = useQuery("https://dummyjson.com/products");

  return (
    <>
      <h1>Products</h1>
      {state === "Error" && <p>Error: {error}</p>}
      {state === "loading" && <p>Loading...</p>}
      <ul>
        {state === "Success" &&
          data.products?.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
}

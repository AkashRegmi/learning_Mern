import { useState, useEffect } from "react";

export function Products() {
  const [products, setProducts] = useState([]);
  const[state,setstate] = useState("loading");
  const [error,setError]=useState(null);



  useEffect(() => {
    //first the loading State 
    //Second the Api calling 
    const getProducts= async ()=>{
        try {
            const res= await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        setstate("Success")
        } catch (error) {
            setError(error.message);
        setstate("Error");
        }
        
    }
    getProducts();
    
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data.products); // Correct placement of setProducts
    //     setstate("Success")
    //   }).catch((err) => {
    //     setError(err.message);
    //     setstate("Error");
    //   })
    //   ;
  }, []); // Adding an empty dependency array to run effect only on mount

  return (
    <>
      <h1>Products</h1>
      {state==="error" && <p> Eror</p>}
      {state==="loading" && <p>Loading........</p>}
      <ul>
        { state==="Success"&& products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
}


import { useQuery } from "./hooks/useQuery";

export function Users() {
//   const [users, setUsers] = useState([]);
//   const [state, setstate] = useState("loading");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     //first the loading State
//     //Second the Api calling
//     const getUsers = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/users");
//         const data = await res.json();
//         setUsers(data.users);
//         setstate("Success");
//       } catch (error) {
//         setError(error.message);
//         setstate("Error");
//       }
//     };
//     getUsers();

//     // fetch("https://dummyjson.com/users")
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //     setUsers(data.users); // Correct placement of setUsers
//     //     setstate("Success")
//     //   }).catch((err) => {
//     //     setError(err.message);
//     //     setstate("Error");
//     //   })
//     //   ;
//   }, []); // Adding an empty dependency array to run effect only on mount
const {data,error, state} = useQuery("https://dummyjson.com/users")

  return (
    <>
      <h1>Users</h1>
      {state === "error" && <p> Eror</p>}
      {state === "loading" && <p>Loading........</p>}
      <ul>
        {state === "Success" &&
          data.users.map(({ id, firstName, lastName }) => <li key={id}>{`${firstName} ${lastName}`}</li>)}
      </ul>
    </>
  );
}

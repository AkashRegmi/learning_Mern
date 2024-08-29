import { Button } from "./Button";
export function TodoList({todos,handleDelete,handleEdit}){
    return (
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button text="Delete" color="red" onClick={() => handleDelete(index)}/>
            
            <Button text="Edit" color="blue" onClick={() => {
              handleEdit(index);
            }}
             />
            
          </li>
        ))}
      </ul>
    )
}
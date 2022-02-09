import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo"
import "./styles.css"

interface Props{
    array: Todo[];
    setArray: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({array, setArray}: Props) =>{ 
    return (
        <div className="todos">
            {array.map((todo) => (
                <SingleTodo todo={todo} 
                key={todo.id} 
                array={array}
                setArray={setArray}/>
            ))}
        </div>
    )
}

export default TodoList;
import React from "react";
import { AiFillEdit } from "react-icons/ai"
import { Todo } from "../model";

type Props = {
    todo: Todo,
    array: Todo[],
    setArray: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, array, setArray} : Props) =>{ 
    return (
        <form className="todos_single">
            <span className="todos_single--text">{todo.todo}</span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;
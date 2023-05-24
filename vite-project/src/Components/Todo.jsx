import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo, updateTodo, editText }) => {
    const handleEditClick = () => {
        editTodo(todo);
    };

    return (
        <li className="flex items-center justify-between mb-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo)}
                    className="mr-2"
                />
                <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>
            </div>
            <div>
                <button className="mr-2" onClick={handleEditClick}>
                    <FaEdit />
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};

export default Todo;

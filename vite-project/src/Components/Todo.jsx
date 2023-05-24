import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
const style ={
    li: `flex justify-between bg-white p-4 my-2 capitalize  `,
     liComplete: `flex justify-between bg-green-400 p-4 my-2 capitalize line-through `   ,

}
const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const handleEditClick = () => {
        editTodo(todo);
    };

    return (
<li className={todo.completed ? style.liComplete : style.li}>      
      <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo)}
                    className="mr-4"
                />
                <div>
                    <h3 className="text-xl font-bold">{todo.title}</h3>
                    <p className="text-gray-600 mb-1">Date: {todo.date}</p>
                    <p className="text-gray-600 mb-1">Time: {todo.time}</p>
                    <p className="text-gray-600 mb-1">Description: {todo.description}</p>
                    <p className="text-gray-600 mb-1">Priority: {todo.priority}</p>
                </div>
            </div>
            <div>
                <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2" onClick={handleEditClick}>
                    <FaEdit />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2" onClick={() => deleteTodo(todo.id)}>
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};

export default Todo;
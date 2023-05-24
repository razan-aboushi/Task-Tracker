import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "./Firebase";
import Todo from "./ToDo";
import {
    query,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
} from "firebase/firestore";

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-red-300 to-red-200`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-green-500 text-slate-100`,
    count: `text-center p-2`,
};

function Task() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [editText, setEditText] = useState("");
    console.log(input);

    // create todo
    const createTodo = async (e) => {
        e.preventDefault();
       
        await addDoc(collection(db, "todos"), {
            text: input,
            completed: false,
        });
        setInput("");
    };

    // read todo from firebase
    useEffect(() => {
        const dbpath = query(collection(db, "todos"));
        const unsubscribe = onSnapshot(dbpath, (querySnapshot) => {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArr);
        });
        return () => unsubscribe();
    }, []);

    // update todo in firebase
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed,
        });
    };

    // delete todo
    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    }

    // edit todo
    const handleEditTodo = (todo) => {
        setSelectedTodo(todo);
        setEditText(todo.text);
    };

    const updateTodo = async () => {
        
        await updateDoc(doc(db, "todos", selectedTodo.id), {
            text: editText,
        });
        setSelectedTodo(null);
        setEditText("");
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>Todo App</h3>
                <form className={style.form} onSubmit={createTodo}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Add Todo"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className={style.button}>
                        <AiOutlinePlus size={30} />
                    </button>
                </form>
                {selectedTodo ? (
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                        <button onClick={updateTodo}>Save</button>
                    </div>
                ) : (
                    <div>
                        <ul>
                            {todos.map((todo, index) => (
                                <Todo
                                    key={index}
                                    todo={todo}
                                    toggleComplete={toggleComplete}
                                    deleteTodo={deleteTodo}
                                    editTodo={handleEditTodo}
                                    updateTodo={updateTodo}
                                    editText={editText}
                                />
                            ))}
                        </ul>
                        {todos.length < 1 ? null : (
                            <p className={style.count}>{`You have ${todos.length} todos`}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Task;

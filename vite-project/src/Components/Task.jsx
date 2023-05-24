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
    bg: "h-screen w-screen p-4 bg-gradient-to-r from-red-300 to-red-200",
    container: "bg-slate-100 max-w-[1000px] w-full m-auto rounded-md shadow-xl p-4",
    heading: "text-4xl font-bold text-center text-gray-800 p-4",
    form: "flex flex-wrap justify-between m-5",
    input: "border p-2 w-full text-xl my-2",
    button: "border p-4 ml-2 bg-green-500 text-slate-100",
    saveButton: "border p-4 ml-2 bg-blue-500 text-slate-100",
    count: "text-center p-2",
    todoList: "my-4 p-4",
};

function Task() {



    const [selectedTodo, setSelectedTodo] = useState(null);
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [editText, setEditText] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editTime, setEditTime] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editProirety, setEditProirety] = useState("");

    const [searchTerm, setSearchTerm] = useState('');
    const [FilterData, setFilterData] = useState([]);



    // create todo
    const createTodo = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "todos"), {
            title: title,
            date: date,
            time: time,
            description: description,
            priority: priority,
            completed: false,
        });

        // Reset the input fields
        setTitle("");
        setDate("");
        setTime("");
        setDescription("");
        setPriority("low");
    };

    // read todo from firebase
    useEffect(() => {
        const dbpath = query(collection(db, "todos"));
        const unsubscribe = onSnapshot(dbpath, (querySnapshot) => {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            setTodos(todosArr);
            setFilterData(todosArr);
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
        await deleteDoc(doc(db, "todos", id));
    };

    // edit todo
    const handleEditTodo = (todo) => {
        setSelectedTodo(todo);
        setTitle(todo.title);
        setDate(todo.date);
        setTime(todo.time);
        setDescription(todo.description);
        setPriority(todo.priority);
        setEditText(todo.title);
        setEditDate(todo.date)
        setEditTime(todo.time)
        setEditDescription(todo.description)
        setEditProirety(todo.priority)

    };

    const updateTodo = async () => {
        await updateDoc(doc(db, "todos", selectedTodo.id), {
            title: editText,
            date: editDate,
            time: editTime,
        });
        setSelectedTodo(null);
        setEditText("")
        setEditDate("")
        setEditTime("")
    };


    const filterDataByName = (searchTerm) => {
        const filteredData = todos.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterData(filteredData);
    }

    return (
        <div className="h-auto">
            <div  >

                <div className={style.container}>

                    <h3 className={style.heading}>Todo App</h3>
                    <form className={style.form} onSubmit={createTodo}>
                        <input type='text' placeholder='Search' style={{ border: "1px solid black", }}
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                filterDataByName(e.target.value);
                            }
                            } />
                        <input
                            className={style.input}
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            className={style.input}
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <input
                            className={style.input}
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <textarea
                            className={style.input}
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label className="text-2xl font-bold">Priority</label>
                        <select
                            className={style.input}
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
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
                                onChange={(e) => {
                                    setEditText(e.target.value);

                                }}

                            />


                            <input
                                className={style.input}
                                type="text"
                                value={editDate}
                                onChange={(e) => {
                                    setEditDate(e.target.value);

                                }}

                            />

                            <input
                                className={style.input}
                                type="text"
                                value={editTime}
                                onChange={(e) => {
                                    setEditTime(e.target.value);

                                }}

                            />
                            <input
                                className={style.input}
                                type="text"
                                value={editDescription}
                                onChange={(e) => {
                                    setEditDescription(e.target.value);

                                }}

                            />

                            <input
                                className={style.input}
                                type="text"
                                value={editProirety}
                                onChange={(e) => {
                                    setEditProirety(e.target.value);

                                }}

                            />


                            <button className={style.saveButton} onClick={updateTodo}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <div>
                            <ul className={style.todoList}>
                                {FilterData?.map((todo) => {
                                    return (
                                        <>
                                            <Todo
                                                key={todo.id}
                                                todo={todo}
                                                toggleComplete={toggleComplete}
                                                deleteTodo={deleteTodo}
                                                editTodo={handleEditTodo}
                                                updateTodo={updateTodo}
                                            />
                                        </>
                                    )
                                }
                                )}
                            </ul>
                            {FilterData.length < 1 ? null : (
                                <p className={style.count}>{`You have ${FilterData.length} todos`}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Task;
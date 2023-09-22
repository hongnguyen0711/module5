import React, {useEffect, useState} from "react";
import * as todoService from "../services/TodoService"

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        setTodos(await todoService.getALl());
    }
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <h1> Todos List</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>userId</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed?'yes':'no'}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )

}
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import {TodoList} from "./components/TodoList";
import React from "react";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";
import {ToastContainer} from "react-toastify";
import {TodoCreate} from "./components/TodoCreate";

function App() {
  return (
    <>
        <NavLink to='/todo'>List</NavLink>
        <NavLink to='/todo/create' className='ms-2'>Add</NavLink>
        <Routes>
            <Route path='/todo' element={<TodoList/>}/>
            <Route path='/todo/create' element={<TodoCreate/>}/>
        </Routes>
        <ToastContainer/>
    </>
  );
}

export default App;

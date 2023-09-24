import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import {BookList} from "./components/BookList";
import {Route, Routes} from "react-router";
import React from "react";
import {BookCreate} from "./components/BookCreate";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BookEdit} from "./components/BookEdit";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<BookList/>}/>
                <Route path="/create" element={<BookCreate/>}/>
                <Route path="/edit/:id" element={<BookEdit/>}/>
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App;

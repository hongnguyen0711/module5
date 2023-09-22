import React, {useEffect, useState} from "react";
import * as bookService from "../services/BookService";
import {Link} from "react-router-dom";

export function BookList() {
    const [books, setBooks] = useState([]);
    const getBook = async () => {
        setBooks(await bookService.getAll());
    }
    useEffect(() => {
        getBook();
    }, []);
    return (
        <>
            <h1>Library</h1>
            <Link className="btn btn-outline-primary" to="/create">Add</Link>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((b) => (
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td>{b.quantity}</td>
                            <td><Link className="btn btn-outline-primary" to="/edit">Edit</Link></td>
                            <td><Link className="btn btn-outline-danger" to="/delete">Delete</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}
export default BookList;
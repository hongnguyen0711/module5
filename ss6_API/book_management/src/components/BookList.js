import React, {useEffect, useState} from "react";
import * as bookService from "../services/BookService";
import {Link, useNavigate} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";


export function BookList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        setBooks(await bookService.getAll());
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    const handleShowModal = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const deleteBook = async () => {
        await bookService.del(selectedBook);
        setBooks(books.filter((book) => book.id !== selectedBook.id));//Xóa sách khỏi danh sách
        setShowModal(false); // Ẩn modal sau khi xóa sách
        setSelectedBook(null);
        navigate("/"); // Chuyển hướng về trang danh sách
        toast("Delete successfully");

    };

    return (
        <>
            <h1>Library</h1>
            <Link className="btn btn-outline-primary" to="/create">
                Add
            </Link>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link className="btn btn-outline-primary" to={`/edit/${book.id}`}>
                                Edit
                            </Link>
                        </td>
                        <td>
                            <Button variant="btn btn-outline-danger" onClick={() => handleShowModal(book)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <MyModal action={handleCloseModal} book={selectedBook} onDelete={deleteBook}/>
            </Modal>
        </>
    );
}

function MyModal(props) {
    const {action, book, onDelete} = props;
    const handleDelete = () => {
        onDelete();
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Delete {book?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete {book?.title}?</Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-outline-secondary" onClick={action}>
                    Close
                </Button>
                <Button variant="btn btn-outline-danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </>
    );
}

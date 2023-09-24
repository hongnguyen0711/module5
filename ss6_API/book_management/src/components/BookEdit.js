import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as bookService from "../services/BookService";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function BookEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState(null);
    const editBook = async (data) => {
        console.log(data)
        if (data.quantity !== null && data.quantity !== undefined) {
            data.quantity = parseInt(data.quantity);
        }
        const res = await bookService.edit(data);
        if (res.status === 200) {
            navigate("/");
            toast("Edit successfully");
        } else {
            toast.error("Fail");
        }
    }
    useEffect(() => {
        getBook();
    }, [id]);

    const getBook = async () => {
        let res = await bookService.findById(id);
        const bookTemp = res.data;
        setBook(bookTemp);
    }
    if (book !== null) {
        return (
            <>
                <Formik
                    initialValues={book}
                    onSubmit={(values) => {
                        editBook(values);
                    }}
                >
                    <div style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
                        <h2>Edit Book</h2>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <Field type="text" className="form-control" name="title" id="title"
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <Field type="number" className="form-control" name="quantity"
                                       id="quantity"/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Save</button>
                        </Form>
                    </div>
                </Formik>
            </>
        )
    }
}
import {useNavigate} from "react-router";
import * as bookService from "../services/BookService";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import React from "react";

export function BookCreate() {
    const navigate = useNavigate();
    const createBook = async (data) => {
        data.quantity = parseInt(data.quantity);
        const res = await bookService.create(data);
        if (res.status === 201) {
            navigate("/");
            toast("Create successfully");
        } else {
            toast.error("Create Fail");
        }
    }
    return (
        <>
            <h1>Add Book</h1>
            <Formik
                initialValues={{
                    title: '',
                    quantity: 0
                }}
                onSubmit={(value) => {
                    createBook(value);
                }}>

                <div className="container px-5 my-5">
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">Title</label>
                            <Field className="form-control" name="title" id="title" type="text" placeholder="Title"
                                   data-sb-validations=""/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="quantity">Quantity</label>
                            <Field className="form-control" name="quantity" id="quantity" type="text"
                                   placeholder="Quantity" data-sb-validations=""/>
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-outline-primary" id="submitButton" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>

            </Formik>
        </>
    );
}
import React from "react";
import {ErrorMessage,Field, Form, Formik} from "formik";
import * as Yup from "yup";

function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                }}
                onSubmit={(values => {
                    console.log(values);
                    alert("thành công rồi nhé!")
                    // toast("Thêm mới thành công");
                })}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Tên không được để trống")
                        .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dạng"),
                    email: Yup.string()
                        .required("Email không được để trống")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng"),
                    phone: Yup.string()
                        .required("Số điện thoại không được để trống"),
                    message: Yup.string()
                        .required("Tin nhắn không được để trống")
                })}
            >
                <div className='container'>
                    <h1>Contact Form</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Tên</label>
                            <Field type='text' className='form-control' name="name" id='Name'/>
                            <ErrorMessage name="name" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <Field type='text' className='form-control' name="email" id='Email'/>
                            <ErrorMessage name="email" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Phone' className='form-label'>SĐT</label>
                            <Field type='text' className='form-control' name="phone" id='Phone'/>
                            <ErrorMessage name="phone" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Message' className='form-label'>Tin nhắn</label>
                            <Field type='text' className='form-control' name="message" id='Message'/>
                            <ErrorMessage name="message" component="span" className="form-err"/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Gửi</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default ContactForm;
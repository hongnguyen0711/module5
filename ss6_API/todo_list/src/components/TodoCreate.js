import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import * as todoService from "../services/TodoService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";

export function TodoCreate() {
    const navigate = useNavigate();
    useEffect(() => {
    }, []);
    const createTodo = async (data) => {
        const res = await todoService.create(data);
        if (res.status === 201) {
            navigate('/todo');
            toast("Them moi thanh cong");
        } else {
            toast.error("them moi that bai");
        }
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: "",
                    userId: "",
                    title: "",
                    completed: true
                }}
                onSubmit={(values) => {
                    createTodo(values);
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("Khong duoc de trong")
                })}
            >

                <div className='container'>
                    <h1>Todo List</h1>
                    <Form>
                        <div className='mb-3'>
                            <span>Id</span>
                            <label htmlFor='id' className='form-label'/>
                            <Field type='text' className='form-control' name='id' id='id'/>
                        </div>

                        <div className='mb-3'>
                            <span>userId</span>
                            <label htmlFor='uid' className='form-label'/>
                            <Field type='text' className='form-control' name='userId' id='uid'/>
                        </div>

                        <div className='mb-3'>
                            <span>Title</span>
                            <label htmlFor='todo' className='form-label'/>
                            <Field type='text' className='form-control' name='title' id='todo'/>
                            <ErrorMessage name='title' component='span' className='form-err'/>
                        </div>

                        <div className='mb-3'>
                            <span>Status</span>
                            <label htmlFor='sta' className='form-label'/>
                            <Field type='text' className='form-control' name='completed' id='sta'/>
                        </div>

                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>

        </>
    );
}

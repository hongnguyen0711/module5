import {Link} from "react-router-dom";
import * as customerService from "../../services/CustomerService";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";

export function CustomerCreate() {
    const navigate = useNavigate();
    const createCustomer = async (data) => {
        const res = await customerService.create(data);
        if (res.status === 201) {
            navigate("/customer");
            toast("Thêm mới thành công!");
        } else {
            toast.error("Thất bại!");
        }
    }
    return (
        <>
            <div class="back" style={{marginTop: "30px"}}>
                <Link to="/customer">
                    <button class="btn btn-outline-primary">Quay lại</button>
                </Link>
            </div>
            <Formik
                initialValues={{
                    name: "",
                    date: "",
                    gender: "Nam",
                    card: "",
                    phone: "",
                    email: "",
                    type: "",
                    address: ""
                }}
                onSubmit={(value) => {
                    createCustomer(value);
                }}
                validationSchema={Yup.object({
                    name: Yup.string().matches(/^[A-Z][a-zA-Z]*$/, "Tên phải viết hoa chữ cái đầu, không có số!"),
                    phone: Yup.string().matches(/^0[9]0\d{7}$|^0[9]1\d{7}$/, "Số điện thoại phải bắt đầu 090... hoặc 091.. và đủ 10 số!"),
                    card: Yup.string().matches(/^\d{9}$|^\d{12}$/, "Số cccd phải đủ 9 hoặc 12 số!"),
                    email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng!")
                })}>
                <div class="container-fluid" style={{minHeight: "500px"}} align="center">
                    <div class="bg-light p-5" style={{maxWidth: "40%"}}>
                        <h2 class="mb-4" style={{textAlign: "center"}}>Khách hàng</h2>
                        <Form method="post">
                            <div class="form-group">
                                <label class="form-label" htmlFor="name">Họ tên<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="name" name="name" class="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="name" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="date">Ngày sinh<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="date" name="date" class="form-control"
                                           style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="gender">Giới tính<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="gender" name="gender" class="form-control"
                                           style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="cccd">SỐ CCCD<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="cccd" name="card" class="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="card" component="span" className="form-err"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="phone">Số điện thoại<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="phone" name="phone" class="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="phone" component="span" className="form-err"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="email">Email<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="email" name="email" class="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="email" component="span" className="form-err"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="address">Địa chỉ<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="address" name="address" class="form-control"
                                           style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="type">Loại khách<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="type" name="type" class="form-control"
                                           style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div style={{marginTop: "20px"}} class="form-group mb-0">
                                <button type="submit" value="Lưu" class="btn btn-outline-primary px-3">Lưu</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}
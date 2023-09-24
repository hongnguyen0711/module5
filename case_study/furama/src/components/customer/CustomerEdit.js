import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as customerService from "../../services/CustomerService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export function CustomerEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [customer, setCustomer] = useState(null);
    const editCustomer = async (data) => {
        console.log(data)
        const res = await customerService.edit(data);
        if (res.status === 200) {
            navigate("/customer");
            toast("Sửa thành công!");
        } else {
            toast.error("Thất bại!");
        }
    }
    useEffect(() => {
        getCustomer();
    }, [id]);

    const getCustomer = async () => {
        let res = await customerService.findById(id);
        const customerTemp = res.data;
        setCustomer(customerTemp);
    }
    if (customer !== null) {
        return (
            <>
                <div className="back" style={{marginTop: "30px"}}>
                    <Link to="/customer">
                        <button className="btn btn-outline-primary">Quay lại</button>
                    </Link>
                </div>
                <Formik
                    initialValues={customer}
                    onSubmit={(values) => {
                        editCustomer(values);
                    }}
                >
                    <div className="container-fluid" style={{minHeight: "500px"}} align="center">
                        <div className="bg-light p-5" style={{maxWidth: "40%"}}>
                            <h2 className="mb-4" style={{textAlign: "center"}}>Khách hàng</h2>
                            <Form method="post">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Họ tên<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="name" name="name" class="form-control"
                                               style={{width: "100%"}}/>
                                        <ErrorMessage name="name" component="span" className="form-err"/>

                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="date">Ngày sinh<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="date" name="date" class="form-control"
                                               style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="gender">Giới tính<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="gender" name="gender" class="form-control"
                                               style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cccd">SỐ CCCD<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="cccd" name="card" class="form-control"
                                               style={{width: "100%"}}/>
                                        <ErrorMessage name="card" component="span" className="form-err"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Số điện thoại<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="phone" name="phone" class="form-control"
                                               style={{width: "100%"}}/>
                                        <ErrorMessage name="phone" component="span" className="form-err"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="email" name="email" class="form-control"
                                               style={{width: "100%"}}/>
                                        <ErrorMessage name="email" component="span" className="form-err"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="address">Địa chỉ<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="address" name="address" class="form-control"
                                               style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="type">Loại khách<span
                                        style={{color: "red"}}>*</span>:</label>
                                    <div>
                                        <Field type="text" id="type" name="type" class="form-control"
                                               style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div style={{marginTop: "20px"}} className="form-group mb-0">
                                    <button type="submit" value="Lưu" className="btn btn-outline-primary px-3">Lưu
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>

                </Formik>
            </>
        )
    }
}
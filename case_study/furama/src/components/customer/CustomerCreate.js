import {Link} from "react-router-dom";
import * as customerService from "../../services/CustomerService";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";

export function CustomerCreate() {
    const navigate = useNavigate();
    const [customerTypes, setCustomerTypes] = useState([]);

    const createCustomer = async (data) => {
        let newCustomer = {
            ...data,
            type: JSON.parse(data.type)
        }
        const res = await customerService.create(newCustomer);
        if (res.status === 201) {
            navigate("/customer");
            toast("Thêm mới thành công!");
        } else {
            toast.error("Thất bại!");
        }
    }
    const getCustomerType = async () => {
        setCustomerTypes(await customerService.getCustomerType());
    }
    useEffect(() => {
        getCustomerType();

    }, []);

    const validate = Yup.object({
        name: Yup.string()
            .required("Không được để trống!")
            .matches(/^(?:[A-Z][a-z]*\s){1,2}[A-Z][a-zA-Z]*$/, "Tên phải viết hoa chữ cái đầu, không có số!"),
        phone: Yup.string()
            .required("Không được để trống!")
            .matches(/^0[9]0\d{7}$|^0[9]1\d{7}$/, "Số điện thoại phải bắt đầu 090... hoặc 091.. và đủ 10 số!"),
        card: Yup.string()
            .required("Không được để trống!")
            .matches(/^\d{9}$|^\d{12}$/, "Số CCCD phải đủ 9 hoặc 12 số!"),
        email: Yup.string()
            .required("Không được để trống!")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng!")
    });

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
                    gender: "",
                    card: "",
                    phone: "",
                    email: "",
                    type: JSON.stringify({
                        id: 5,
                        name: "Member"
                    }),
                    address: ""
                }}
                onSubmit={(value) => {
                    createCustomer(value);
                }}
                validationSchema={validate}>

                <div class="container-fluid" style={{minHeight: "500px"}} align="center">
                    <div class="bg-light p-5" style={{maxWidth: "40%"}}>
                        <h2 class="mb-4" style={{textAlign: "center"}}>Thêm mới Khách hàng</h2>
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
                                    <Field type="date" id="date" name="date" class="form-control"
                                           style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="gender">Giới tính<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field as="select" id="gender" name="gender" class="form-control" style={{width: "100%"}}>
                                        <option value="">-- Chọn giới tính --</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                    </Field>
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
                                    <Field as="select" id="type" name="type" className="form-control" style={{ width: "100%" }}>
                                        {customerTypes.map((type) => (
                                            <option key={type.id} value={JSON.stringify(type)}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </Field>
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
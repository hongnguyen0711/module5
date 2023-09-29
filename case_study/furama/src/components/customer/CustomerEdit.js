import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as customerService from "../../services/CustomerService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";

export function CustomerEdit() {
    const navigate = useNavigate();
    const id = useParams();
    console.log(id);
    const [customerTypes, setCustomerTypes] = useState([]);
    const [customer, setCustomer] = useState(null);

    const editCustomer = async (data) => {
        const newCustomer = {...data, type: JSON.parse(data.type)}
        const res = await customerService.edit(newCustomer);
        if (res.status === 200) {
            navigate("/customer");
            toast("Sửa thành công!");
        } else {
            toast.error("Thất bại!");
        }
    }
    useEffect(() => {
        getCustomer();
        getCustomerType();
    }, []);


    const getCustomerType = async () => {
        setCustomerTypes(await customerService.getCustomerType());
    }

    const getCustomer = async () => {
        let res = await customerService.findById(id.id);
        const customerTemp = res.data;
        setCustomer(customerTemp);
    }

    return customer ? (
        <>
            <div className="back" style={{marginTop: "30px"}}>
                <Link to="/customer">
                    <button className="btn btn-outline-primary">Quay lại</button>
                </Link>
            </div>
            <Formik
                initialValues={{
                    ...customer,
                    type: JSON.stringify(customer.type)
                }}
                onSubmit={(values) => {
                    editCustomer(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string().matches(/^(?:[A-Z][a-z]*\s){1,2}[A-Z][a-zA-Z]*$/, "Tên phải viết hoa chữ cái đầu, không có số!"),
                    phone: Yup.string().matches(/^0[9]0\d{7}$|^0[9]1\d{7}$/, "Số điện thoại phải bắt đầu 090... hoặc 091.. và đủ 10 số!"),
                    card: Yup.string().matches(/^\d{9}$|^\d{12}$/, "Số CCCD phải đủ 9 hoặc 12 số!"),
                    email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng!")
                })}
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
                                    <Field type="date" id="date" name="date" class="form-control"
                                           style={{width: "100%"}} />
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
                                    <Field as="select" id="type" name="type" class="form-control" style={{width: "100%"}}>
                                        {customerTypes.map((type)=>(
                                            <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                        ))}
                                    </Field>
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
    ) : null;
}
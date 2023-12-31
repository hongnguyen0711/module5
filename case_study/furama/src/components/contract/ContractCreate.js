import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import * as contractService from "../../services/ContractService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";

export function ContractCreate() {
    console.log(1);
    const navigate = useNavigate();
    const createContract = async (contract) => {
        console.log(2)
        const res = await contractService.create(contract);
        if (res.status === 201) {
            navigate("/contract");
            toast("Thêm mới thành công!");
        } else {
            toast.error("Thất bại!")
        }
    }

    const validate = Yup.object({
        contractNumber: Yup.string()
            .required("Không được để trống!"),
        startDate: Yup.string()
            .required("Không được để trống!"),
        endDate: Yup.string()
            .required("Không được để trống!"),
        depositAmount: Yup.number()
            .required("Không được để trống!")
            .min(0, "Phải là số nguyên dương!"),
        totalPayment: Yup.number()
            .required("Không được để trống!")
            .min(0, "Phải là số nguyên dương!")
    });

    console.log(3)
    return (
        <>
            <div class="back" style={{marginTop: "30px"}}>
                <Link to="/contract">
                    <button class="btn btn-outline-primary">Quay lại</button>
                </Link>
            </div>
            <Formik
                initialValues={{
                    contractNumber: "",
                    startDate: "",
                    endDate: "",
                    depositAmount: 0,
                    totalPayment: 0
                }}
                onSubmit={(value) => createContract(value)}
                validationSchema={validate}
            >
                <div class="container-fluid" style={{minHeight: "500px"}} align="center">
                    <div class="bg-light p-5" style={{maxWidth: "40%"}}>
                        <h2 class="mb-4" style={{textAlign: "center"}}>Tạo hợp đồng</h2>
                        <Form method="post">
                            <div class="form-group">
                                <label class="form-label" htmlFor="name">Mã hợp đồng<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="name" class="form-control" name="contractNumber"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="contractNumber" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="date">Ngày bắt đầu<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="date" id="date" class="form-control" name="startDate"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="startDate" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="gender">Ngày kết thúc<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="date" id="gender" class="form-control" name="endDate"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="endDate" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" htmlFor="cccd">SỐ tiền cọc trước<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="cccd" name="depositAmount" class="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="depositAmount" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Tổng tiền<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="text" id="phone" name="totalPayment" className="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="totalPayment" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div style={{marginTop: "20px"}} class="form-group mb-0">
                                <button type="submit" class="btn btn-outline-primary px-3">Lưu</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}
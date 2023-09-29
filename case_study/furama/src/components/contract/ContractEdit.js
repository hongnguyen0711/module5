import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import * as contractService from "../../services/ContractService";
import {useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";

export function ContractEdit() {
    const navigate = useNavigate();
    const param = useParams();
    const [contract, setContract] = useState(null);

    useEffect(() => {
        getContract();
    }, []);

    const getContract = async () => {
        const result = await contractService.findById(param.id);
        console.log(result)
        setContract(result.data);
    }
    const editContract = async (value) => {
        const result = await contractService.edit(value);
        console.log(result.status)
        if (result.status === 200) {
            navigate("/contract");
            toast("Sửa thành công!");
        } else {
            toast.error("Thất bại!");
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

    return contract ? (
        <>
            <div class="back" style={{marginTop: "30px"}}>
                <Link to="/contract">
                    <button class="btn btn-outline-primary">Quay lại</button>
                </Link>
            </div>
            <Formik
                initialValues={{
                    ...contract
                }}
                onSubmit={(value) => editContract(value)}
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
                                    <Field type="number" id="cccd" name="depositAmount" class="form-control"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="depositAmount" component="span" className="form-err"/>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Tổng tiền<span
                                    style={{color: "red"}}>*</span>:</label>
                                <div>
                                    <Field type="number" id="phone" name="totalPayment" className="form-control"
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
    ) : null;
}
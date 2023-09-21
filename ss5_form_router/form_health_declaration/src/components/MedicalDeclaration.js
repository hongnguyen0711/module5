import * as React from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function MedicalDeclaration() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    card: "",
                    age: 1999,
                    gender: "1",
                    nationality: "",
                    company: "",
                    department: "",
                    insurance: "",
                    province: "",
                    district: "",
                    wards: "",
                    homeNumber: "",
                    phone: "",
                    email: ""
                }}
                onSubmit={(values => {
                    console.log(values);
                    alert("Thành công");
                })}
                validationSchema={Yup.object({
                    name: Yup.string().required("Tên không được để trống"),
                    card: Yup.string().required("Số căn cước không được để trống"),
                    age: Yup.number().required("Năm sinh không được để trống")
                        .min(1900, "Năm sinh phải lớn hơn 1900"),
                    nationality: Yup.string().required("Quốc tịch không được để trống"),
                    province: Yup.string().required("Tỉnh  không được để trống"),
                    district: Yup.string().required("Quân không được để trống"),
                    wards: Yup.string().required("Phường không được để trống"),
                    homeNumber: Yup.string().required("Số nhà không được để trống"),
                    phone: Yup.string().required("Điện thoại không được để trống"),
                    email: Yup.string().required("Email không được để trống")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng")
                })}
            >
                <div className='container'>
                    <h1>Medical Declaration</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Họ tên</label>
                            <Field type='text' className='form-control' name="name" id='Name'/>
                            <ErrorMessage name="name" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Card' className='form-label'>CCCD</label>
                            <Field type='text' className='form-control' name="card" id='Card'/>
                            <ErrorMessage name="card" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Age' className='form-label'>Tuổi</label>
                            <Field type='number' className='form-control' name="age" id='Age'/>
                            <ErrorMessage name="age" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <span>Giới tính:</span>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Nationality' className='form-label'>Quốc tịch</label>
                            <Field type='text' className='form-control' name="nationality" id='Nationality'/>
                            <ErrorMessage name="nationality" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Company' className='form-label'>Công ty làm việc</label>
                            <Field type='text' className='form-control' name="company" id='Company'/>
                            <ErrorMessage name="company" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Department' className='form-label'>BỘ phận</label>
                            <Field type='text' className='form-control' name="department" id='Department'/>
                            <ErrorMessage name="department" component="span" className="form-err"/>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="Insurance" name="insurance"
                                   id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Có thẻ bảo hiểm y tế
                            </label>
                        </div>
                        <h3>Địa chỉ liên lạc tại việt nam</h3>
                        <div className='mb-3'>
                            <label htmlFor='Province' className='form-label'>Tỉnh thành</label>
                            <Field type='text' className='form-control' name="province" id='Province'/>
                            <ErrorMessage name="province" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='District' className='form-label'>Quận/Huyện</label>
                            <Field type='text' className='form-control' name="district" id='District'/>
                            <ErrorMessage name="district" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Wards' className='form-label'>Phường/Xã</label>
                            <Field type='text' className='form-control' name="wards" id='Wards'/>
                            <ErrorMessage name="wards" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HomeNumber' className='form-label'>Số nhà, tổ dân phố, thôn/đội</label>
                            <Field type='text' className='form-control' name="homeNumber" id='HomeNumber'/>
                            <ErrorMessage name="homeNumber" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Phone' className='form-label'>Điện thoại</label>
                            <Field type='text' className='form-control' name="phone" id='Phone'/>
                            <ErrorMessage name="phone" component="span" className="form-err"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <Field type='text' className='form-control' name="email" id='Email'/>
                            <ErrorMessage name="email" component="span" className="form-err"/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='history' className='form-label'><h4>Trong vòng 14 ngày qua, Anh/chị có đến
                                quốc
                                gia / vùng lãnh thổ nào(có thể đi qua nhiều quốc gia)</h4></label>
                            <Field as="textarea" className='form-control' name="email" id='history'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='symptom' className='form-label'><h4>Trong vòng 14 ngày qua, Anh/chị có xuất
                                hiện một trong các dấu hiệu sau không?</h4></label>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="ho" name="bieuhien" id="a"/>
                                <label className="form-check-label" htmlFor="a">
                                    Ho
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="sot" name="bieuhien" id="b"/>
                                <label className="form-check-label" htmlFor="b">
                                    Sốt
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="khotho" name="bieuhien"
                                       id="c"/>
                                <label className="form-check-label" htmlFor="c">
                                    Khó thở
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="phoi" name="bieuhien" id="d"/>
                                <label className="form-check-label" htmlFor="d">
                                    Viêm phổi
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="hong" name="bieuhien" id="e"/>
                                <label className="form-check-label" htmlFor="e">
                                    Đau họng
                                </label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='meet' className='form-label'><h4>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc
                                với?</h4></label>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="nghingo" name="tiepxuc"
                                       id="g"/>
                                <label className="form-check-label" htmlFor="g">
                                    Người bệnh hoặc nghi ngờ mắc bệnh COVID-19
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="nguoila" name="tiepxuc"
                                       id="k"/>
                                <label className="form-check-label" htmlFor="k">
                                    Người từ nước có bệnh COVID-19
                                </label>
                            </div>
                            <div>
                                <Field className="form-check-input" type="checkbox" value="trieuchung" name="tiepxuc"
                                       id="t"/>
                                <label className="form-check-label" htmlFor="t">
                                    Người có biểu hiện (sốt, ho, khó thở, viêm phổi)
                                </label>
                            </div>

                        </div>
                        <button type='submit' className='btn btn-primary'>Gửi</button>
                    </Form>
                </div>
            </Formik>
        </>
    );
};
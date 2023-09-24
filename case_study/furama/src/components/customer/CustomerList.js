import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useNavigate} from "react-router";
import * as customerService from "../../services/CustomerService";
import {toast} from "react-toastify";
import {Button, Modal} from "react-bootstrap";

export function CustomerList() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getCustomer();
    }, []);

    const getCustomer = async () => {
        setCustomers(await customerService.getAll());
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCustomer(null);
    };

    const handleShowModal = (book) => {
        setSelectedCustomer(book);
        setShowModal(true);
    };

    const deleteCustomer = async () => {
        await customerService.del(selectedCustomer);
        setCustomers(customers.filter((customer) => customer.id !== selectedCustomer.id));//Xóa sách khỏi danh sách
        setShowModal(false); // Ẩn modal sau khi xóa sách
        setSelectedCustomer(null);
        navigate("/customer"); // Chuyển hướng về trang danh sách
        toast("Delete successfully");

    };

    return (
        <>
            <Header/>
            <h1 style={{textAlign: "center"}}>Khách Hàng</h1>
            <Link className="btn btn-outline-primary" to="/createCustomer" style={{marginBottom: "1%"}}>
                Thêm mới
            </Link>
            <table className="table table-dark table-hover ">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Họ Tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>CCCD</th>
                    <th>SĐT</th>
                    <th>Email</th>
                    <th>Loại khách</th>
                    <th>Địa chỉ</th>
                    <th>Chức năng</th>
                    <th>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => {
                    return (
                        <tr key={customer.id}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.date}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.card}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.type}</td>
                            <td>{customer.address}</td>
                            <td>
                                <Link className="btn btn-outline-primary" to={`/editCustomer/${customer.id}`}>Sửa</Link>
                            </td>
                            <td>
                                <Button variant="btn btn-outline-danger" onClick={() => handleShowModal(customer)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <MyModal action={handleCloseModal} customer={selectedCustomer} onDelete={deleteCustomer}/>
            </Modal>
            <div style={{textAlign: "center"}}>
                <a>Trước</a>
                <span>/</span>
                <a>Sau</a>
            </div>
            <Footer/>
        </>

    )
}

function MyModal(props) {
    const {action, customer, onDelete} = props;
    const handleDelete = () => {
        onDelete();
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Xóa {customer?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xóa khách hàng {customer?.name} không? Lưu ý hoạt động này không thể hoàn tác!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-outline-secondary" onClick={action}>
                    Close
                </Button>
                <Button variant="btn btn-outline-danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </>
    );
}
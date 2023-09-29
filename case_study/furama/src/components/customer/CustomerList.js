import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import * as customerService from "../../services/CustomerService";
import {toast} from "react-toastify";
import {Button, Modal} from "react-bootstrap";
import {MyModal} from "../common/ModalDelete";


export function CustomerList() {
    console.log(1)
    const [customers, setCustomers] = useState([]);

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [limit, setLimit] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [records, setRecords] = useState();
    const [totalPage, setTotalPage] = useState();
    const [searchName, setSearchName] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [refresh, setRefresh] = useState(false);

    const getCustomerList = async () => {
        const newList = await customerService.getAllPage(currentPage, limit, searchName, searchEmail);
        console.log(2)
        setCustomers(newList[0]);
        setRecords(newList[1]);
        console.log(newList[2]);
        setTotalPage(Math.ceil(newList[1] / limit));

        // if (newList[0].length===0){
        //     toast("Không tìm thấy!");
        // }
    }

    useEffect(() => {
        console.log(3)
        getCustomerList();
    }, [refresh, searchName, limit, searchEmail] );

    const previousPage = () => {

        setCurrentPage(currentPage - 1);
        setRefresh(!refresh);
    }

    const nextPage = () => {
        console.log(4)
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            setRefresh(!refresh);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCustomer(null);
    };

    const handleShowModal = (customer) => {
        setSelectedCustomer(customer);
        setShowModal(true);
    };

    const deleteCustomer = async () => {
        await customerService.del(selectedCustomer);
        setCustomers(customers.filter((customer) => customer.id !== selectedCustomer.id));//Xóa kh khỏi danh sách
        setShowModal(false); // Ẩn modal sau khi xóa sách
        setSelectedCustomer(null);
        toast("Xóa thành công!");
    };
console.log(5)
    return (
        <>
            <Header/>
            <h1 style={{textAlign: "center", color: "#574d4c"}}>Khách Hàng</h1>
            <div style={{display: "flex", marginBottom: "1%", marginLeft: "1%"}}>
                <input type="text" className="form-control" placeholder="Tìm kiếm.." style={{width: "30%"}}
                       onChange={(event) => {
                           setSearchName(event.target.value)
                           setSearchEmail(event.target.value)
                       }} />
                <Link className="btn btn-outline-primary" to="/createCustomer" style={{marginLeft: "1%"}}>
                    Thêm mới
                </Link>
                <select onChange={(event) => setLimit(event.target.value)} aria-label=".form-select-sm example">
                    <option value="3"> Chọn số lượng bản ghi</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>
            <table className="table table-striped table-hover ">
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
                            <td>{customer.type.name}</td>
                            <td>{customer.address}</td>
                            <td>
                                <Link className="btn btn-outline-primary" to={`/editCustomer/${customer.id}`}>Sửa</Link>
                            </td>
                            <td>
                                <Button variant="btn btn-outline-danger" onClick={() => handleShowModal(customer)}>
                                    xóa
                                </Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {/*phân trang*/}
            <div style={{whiteSpace: 'nowrap', textAlign: "center"}}>
                <div style={{display: 'inline-block', marginRight: '10px'}}>
                    <button onClick={() => previousPage()}
                            className={`btn btn-primary ${currentPage <= 1 ? "disabled" : ""}`}>
                        Trước
                    </button>
                </div>

                <span style={{margin: "1%", fontWeight: "bold", fontSize: "20px"}}>{currentPage}/{totalPage}</span>

                <div style={{display: 'inline-block'}}>
                    <button onClick={() => nextPage()}
                            className={`btn btn-primary ${currentPage >= totalPage ? "disabled" : ""}`}>
                        Sau
                    </button>
                </div>
            </div>
            {/*modal xóa*/}
            <Modal show={showModal} onHide={handleCloseModal}>
                <MyModal action={handleCloseModal} element={selectedCustomer} onDelete={deleteCustomer}/>
            </Modal>

            <Footer/>
        </>
    )
    console.log(6)
}


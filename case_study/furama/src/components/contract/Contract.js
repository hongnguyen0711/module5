import React, {useEffect, useState} from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {Link} from "react-router-dom";
import * as contractService from "../../services/ContractService"
import {toast} from "react-toastify";
import {Modal} from "react-bootstrap";
import {MyModal} from "../common/ModalDelete";

function Contracts() {
    const [contracts, setContracts] = useState([]);
    // modal xóa
    const [deleteContract, setDeleteContract] = useState(null);
    const [showModal, setShowModal] = useState(false);
    // phân trang
    const [limit, setLimit] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [records, setRecords] = useState();
    const [totalPage, setTotalPage] = useState();
    const [nameSearch, setSearchName] = useState("");

    const getContractList = async () => {
        const array = await contractService.getAllPage(currentPage, limit, nameSearch);
        setContracts(array[0]);
        setRecords(array[1]);
        setTotalPage(Math.ceil(array[1] / limit));
        console.log(array[2]);
        // if (array[0].length === 0) {
        //     toast("Không tìm thấy");
        // }
    }

    useEffect(() => {
        getContractList();
    }, [currentPage, nameSearch, limit]);

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const handleShowModal = (contract) => {
        setDeleteContract(contract);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setDeleteContract(null);
        setShowModal(false);
    }

    const removeContract = async () => {
        await contractService.del(deleteContract);
        setContracts(contracts.filter((contract) => contract.id !== deleteContract.id));
        toast("Xóa thành công!");
        setShowModal(false);
        setDeleteContract(null);
    }
    return (
        <div className="table-responsive">
            <Header/>
            <h1 style={{textAlign: "center", color: "#574d4c"}}>Hợp Đồng</h1>

            <div style={{display: "flex", marginBottom: "1%", marginLeft: "1%"}}>
                <input type="text" className="form-control" placeholder="Tìm kiếm.." style={{width: "30%"}}
                       onChange={(name) => (setSearchName(name.target.value))}/>
                <Link className="btn btn-outline-primary" to="/createContract" style={{marginBottom: "1%"}}>
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

            <table className="table table-striped table-hover table-bordered zero-configuration">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng tiền</th>
                    <th colSpan="2">Chức năng</th>

                </tr>
                </thead>
                <tbody>
                {contracts.map((contract, index) => (

                    <tr key={contract.contractNumber}>
                        <td>{index + 1}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{contract.depositAmount}</td>
                        <td>{contract.totalPayment}</td>
                        <td><Link className="btn btn-outline-primary" to={`/editContract/${contract.id}`}>sửa</Link>
                        </td>
                        <td><Link className="btn btn-outline-danger" onClick={() => handleShowModal(contract)}>Xóa</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/*xóa modal*/}
            <Modal show={showModal} onHide={handleCloseModal}>
                <MyModal action={handleCloseModal} element={deleteContract} onDelete={removeContract}/>
            </Modal>

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

            <Footer/>
        </div>
    );
}

export default Contracts;
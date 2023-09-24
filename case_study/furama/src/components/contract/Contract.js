import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {Link} from "react-router-dom";

function Contracts() {
    const contracts = [
        {
            id: 1,
            contractNumber: "CTR-01",
            startDate: "2023-12-20",
            endDate: "2023-12-30",
            depositAmount: 1000,
            totalPayment: 25000
        },
        {
            id: 2,
            contractNumber: "CTR-02",
            startDate: "2023-12-20",
            endDate: "2023-12-30",
            depositAmount: 1000,
            totalPayment: 28000
        },
        {
            id: 3,
            contractNumber: "CTR-03",
            startDate: "2023-12-20",
            endDate: "2023-12-30",
            depositAmount: 1000,
            totalPayment: 22000
        },
        {
            id: 4,
            contractNumber: "CTR-04",
            startDate: "2023-12-20",
            endDate: "2023-12-30",
            depositAmount: 1000,
            totalPayment: 27000
        },
        {
            id: 5,
            contractNumber: "CTR-05",
            startDate: "2023-12-20",
            endDate: "2023-12-30",
            depositAmount: 1000,
            totalPayment: 23000
        }
    ];

    return (
        <div className="table-responsive">
            <Header/>
            <h1 style={{textAlign: "center"}}>Hợp Đồng</h1>
            <Link className="btn btn-outline-primary" to="/createContract" style={{marginBottom: "1%"}}>
                Thêm mới
            </Link>
            <table className="table table-dark table-hover table-bordered zero-configuration">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng tiền</th>
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
                    </tr>
                ))}
                </tbody>
            </table>
            <div style={{textAlign: "center"}}>
                <a>Trước</a>
                <span>/</span>
                <a>Sau</a>
            </div>
            <Footer/>
        </div>
    );
}

export default Contracts;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useState} from "react";

export function CustomerList() {
    const [customers, setCustomer] = useState(
        [{
            id: 1,
            name: "Le Hi",
            date: "12/20/2022",
            gender: "Nam",
            card: "12202000",
            phone: "0321654987",
            email: "hihi@gmail.com",
            type: "Diamond",
            address: "12 Chế Lan Viên"
        },
            {
                id: 2,
                name: "Le Hi",
                date: "12/20/2022",
                gender: "Nam",
                card: "12202000",
                phone: "0321654987",
                email: "hihi@gmail.com",
                type: "Diamond",
                address: "12 Chế Lan Viên"
            },
            {
                id: 3,
                name: "Le Hi",
                date: "12/20/2022",
                gender: "Nam",
                card: "12202000",
                phone: "0321654987",
                email: "hihi@gmail.com",
                type: "Diamond",
                address: "12 Chế Lan Viên"
            }]
    );
    return (
        <>
            <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
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
                {customers.map((customer) => {
                    return (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.date}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.card}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.type}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className="btn btn-primary">Sửa</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div style={{textAlign: "center"}}>
                <a>Trước</a>
                <span>/</span>
                <a>Sau</a>
            </div>

        </>

    )
}

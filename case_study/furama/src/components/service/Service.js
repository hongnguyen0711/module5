import Header from "../header/Header";
import Footer from "../footer/Footer";

import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import * as facilityService from "../../services/FacilityService";
import {toast} from "react-toastify";
import {Button,Modal} from "react-bootstrap";

function Service() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        getService();
    }, []);

    const getService = async () => {
        setServices(await facilityService.getALl());
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };
    const handleShowModal = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };
    const deleteService = async () => {
        await facilityService.del(selectedService);
        setServices(services.filter((service) => service.id !== selectedService.id));//Xóa sách khỏi danh sách
        setShowModal(false); // Ẩn modal sau khi xóa sách
        setSelectedService(null);
        navigate("/service"); // Chuyển hướng về trang danh sách
        toast("Xóa thành công!");

    };
    return (
        <div>
            <Header/>
            <img
                src="https://ezcloud.vn/wp-content/uploads/2019/11/villa-la-gi.webp"
                alt="Phòng Đẹp"
                style={{
                    width: '80%',
                    marginLeft: '10%',
                    height: '250px',
                    marginBottom: '2%',
                }}
            />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map((service) => (
                    <div key={service.id} className="col">
                        <div className="card h-100">
                            <img src={service.img} className="card-img-top" alt={"..."}/>
                            <div className="card-body" style={{textAlign:"center"}}>
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">Room size: {service.size}</p>
                            </div>
                            <div className="card-icons" style={{textAlign:"center"}}>
                                <button className="btn btn-outline-primary">Sửa</button>
                                <Button variant="btn btn-outline-danger" onClick={() => handleShowModal(service)}>
                                    Xóa
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <MyModal action={handleCloseModal} service={selectedService} onDelete={deleteService}/>
            </Modal>
            <Footer/>
        </div>
    );
}
function MyModal(props) {
    const {action, service, onDelete} = props;
    const handleDelete = () => {
        onDelete();
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Xóa {service?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xóa dịch vụ {service?.name} không?
                <div style={{color: "red"}}>Lưu ý hoạt động này không thể hoàn tác!</div>
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
export default Service;
import Header from "../header/Header";
import Footer from "../footer/Footer";

import React, {useState} from 'react';

function Service() {
    const [services, setService] = useState([
        {
            id: 1,
            name: "Single Bedroom",
            size: 100,
            img: "https://themewagon.github.io/keto/images/room1.jpg"
        },
        {
            id: 2,
            name: "Twin Bedroom",
            size: 100,
            img: "https://themewagon.github.io/keto/images/room3.jpg"
        },
        {
            id: 3,
            name: "Single Bedroom",
            size: 100,
            img: "https://themewagon.github.io/keto/images/room5.jpg"
        },
        {
            id: 4,
            name: "Double Bedroom",
            size: 100,
            img: "https://themewagon.github.io/keto/images/room6.jpg"
        },
        {
            id: 5,
            name: "Double Bedroom",
            size: 100,
            img: "https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg"
        },
        {
            id: 6,
            name: "Double Bedroom",
            size: 100,
            img: "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        }
    ])
    return (
        <div>
            <Header/>
            <img
                src="https://ezcloud.vn/wp-content/uploads/2019/11/villa-la-gi.webp"
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
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">Room size: {service.size}</p>
                            </div>
                            <div className="card-icons">
                                <button className="btn btn-outline-primary">Sửa</button>
                                <button className="btn btn-outline-danger">Xóa</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Service;
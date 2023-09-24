import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {CustomerList} from "./components/customer/CustomerList";
import Service from "./components/service/Service";
import React from "react";
import {Routes, Route} from "react-router";
import {ToastContainer} from "react-toastify";
import Contracts from "./components/contract/Contract";
import {CustomerCreate} from "./components/customer/CustomerCreate";
import {ContractCreate} from "./components/contract/ContractCreate";
import {CustomerEdit} from "./components/customer/CustomerEdit";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Service/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/createCustomer" element={<CustomerCreate/>}/>
                <Route path="/editCustomer/:id" element={<CustomerEdit/>}/>
                <Route path="/customer" element={<CustomerList/>}/>
                <Route path="/contract" element={<Contracts/>}/>
                <Route path="/createContract" element={<ContractCreate/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;

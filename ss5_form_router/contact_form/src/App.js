import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ContactForm from "./components/ContactForm";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
      <ContactForm/>
  );
}

export default App;

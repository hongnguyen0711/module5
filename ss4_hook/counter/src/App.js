import logo from './logo.svg';
import './App.css';

import React from "react";
import {Counter} from "./components/Counter";

function App() {
    return (
        <div>
            <Counter addAmount={1}/>
            <Counter addAmount={2}/>
        </div>
    );
}

export default App;

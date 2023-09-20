import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";

function useIncrement() {
    const [count, setCount] = useState(0);
    const increase = (addAmount) => setCount(count + addAmount);
    return [count, increase];
}

function Counter({addAmount}) {
    const [count, increase] = useIncrement(addAmount);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increase(addAmount)}>Add</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter addAmount={1}/>
            <Counter addAmount={2}/>
        </div>
    );
}

export default App;

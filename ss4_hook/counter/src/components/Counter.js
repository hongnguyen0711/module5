import React from "react";
import {useIncrement} from "./UseIncrement";

export function Counter({addAmount}) {
    const [count, increase] = useIncrement(addAmount);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increase(addAmount)}>Add</button>
        </div>
    );
}
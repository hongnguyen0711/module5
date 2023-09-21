import {useState} from "react";

export function useIncrement(addAmount) {
    const [count, setCount] = useState(0);
    const increase = (addAmount) => setCount(count + addAmount);
    return [count, increase];
}

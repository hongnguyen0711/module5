import {useState} from "react";

export function useIncrement(initial,addAmount) {
    const [count, setCount] = useState(initial);
    const increase = (addAmount) => setCount(count + addAmount);
    return [count, increase];
}

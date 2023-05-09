import { ReactElement, ReactNode } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: ReactNode,
}

export default function Counter( { setCount, count }: CounterProps): ReactElement {
    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}
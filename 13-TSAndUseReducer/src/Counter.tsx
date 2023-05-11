import { ReactNode, useState } from 'react';

type ChildrenType = {
    children: (num: number) => ReactNode;
}

export default function Counter({ children }: ChildrenType) {
    const [count, setCount] = useState<number>(1);
    
    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}
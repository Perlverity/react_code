import {useState} from 'react';

export default function StateBasic ({init}) {
    const [count, setCount] = useState(init);
    console.log(count);
    // const handleClick = () => setCount(count + 1);
    const handleClick = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
    }
    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>カウント値: {count}</p>
        </>
    )
}
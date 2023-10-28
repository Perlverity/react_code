import {useEffect, useState} from 'react';

export default function HookTimer({ init }) {
    const [count, setCount] = useState(init)

    useEffect(() => {
        const time = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
        return () => {
            clearInterval(time)
        }
    }, [])
    return(
        <div className={count < 0 ? 'warn': ''}>
            現在のカウント：{count}
        </div>
    )
}
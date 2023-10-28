import { useEffect, useRef, useState } from 'react';

export default function HookCallbackRef() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const callbackRef = elem => elem?.focus()

    return (
        <>
            <div>
                <label htmlFor={"name"}>名前:</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor={"email"}>email:</label>
                <input type="text" id="email" />
                <button onClick={handleClick}>拡張表示</button>
            </div>
            {show && (
                <div>
                    <label htmlFor={"address"}>住所:</label>
                    <input type="text" id="address" ref={callbackRef} />
                </div>
            )}
        </>
    )
}
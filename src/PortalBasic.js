import {useState} from 'react';
import {createPortal} from "react-dom";
import './PortalBasic.css';

export default function PortalBasic () {
    const [show, setShow] = useState(false)
    const handleDialog = () => setShow(s => !s)

    return (
        <form>
            <button type={"button"} onClick={handleDialog} disabled={show}>ダイアログを開く</button>
            {show && createPortal(
                <div className={"dialog"}>
                    <p>このコンテンツはポータルで表示されています。</p>
                    <button type={"button"} onClick={handleDialog}>閉じる</button>
                </div>,
                document.getElementById("dialog")
            )}
        </form>
    )
}
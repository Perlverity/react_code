import {useState} from "react";

export default function FormRadio () {
    const [form, setForm] = useState({
        os: 'windows'
    });
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const show = () => {
        console.log(`OS：${form.os}`);
    };

    return (
        <form>
            <fieldset>
                <legend>OSを選択してください</legend>
                <label htmlFor={"windows"}>Windows</label>
                <input type={"radio"} id={"windows"} name={"os"} value={"windows"} checked={form.os === 'windows'}
                       onChange={handleForm}/><br/>
                <label htmlFor={"mac"}>Mac</label>
                <input type={"radio"} id={"mac"} name={"os"} value={"mac"} checked={form.os === 'mac'}
                       onChange={handleForm}/><br/>
                <label htmlFor={"linux"}>Linux</label>
                <input type={"radio"} id={"linux"} name={"os"} value={"linux"} checked={form.os === 'linux'}
                       onChange={handleForm}/><br/>
                <br/>
                <button type={"button"} onClick={show}>送信</button>
            </fieldset>
        </form>
    )
}
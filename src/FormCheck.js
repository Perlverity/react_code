import {useState} from "react";

export default function FormCheck () {
    const [form, setForm] = useState({
        agreement: true
    });
    const handleFormCheck = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    };
    const show = () => {
        console.log(`同意：${form.agreement ? '同意する' : '同意しない'}`);
    };

    return (
        <form>
            <label htmlFor={"agreement"}>利用規約に同意する</label>
            <input type={"checkbox"} id={"agreement"} name={"agreement"} checked={form.agreement} onChange={handleFormCheck}/><br/>
            <button type={"button"} onClick={show}>送信</button>
        </form>
    )
}
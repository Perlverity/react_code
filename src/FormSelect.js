import {useState} from "react";

export default function FormSelect () {
    const [form, setForm] = useState({
        animal: "cat"
    });
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const show = () => {
        console.log(`好きな動物：${form.animal}`);
    };

    return (
        <form>
            <label htmlFor={"animal"}>好きな動物：</label><br/>
            <select id={"animal"} name={"animal"} onChange={handleForm} value={form.animal}>
                <option value={"cat"}>猫</option>
                <option value={"dog"}>犬</option>
                <option value={"rabbit"}>うさぎ</option>
                <option value={"squirrel"}>リス</option>
                <option value={"owl"}>フクロウ</option>
            </select><br/>
            <button type={"button"} onClick={show}>送信</button>
        </form>
    )
}
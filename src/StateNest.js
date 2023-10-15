import {useState} from "react";
import {useImmer} from "use-immer";

export default function StateNest() {
    const[form, setForm] = useImmer({
        name: '山田太郎',
        address: {
            prefecture: '東京都',
            city: '千代田区'
        }
    });
    const handleForm = e => {
        setForm(form => {
            form[e.target.name] = e.target.value
        })
    };
    const handleFormNest = e => {
        setForm(form => {
            form.address[e.target.name] = e.target.value
        })
    };
    const show = () => {
        console.log(`${form.name}は${form.address.prefecture}${form.address.city}に住んでいます`);
    }
    return (
        <form>
            <div>
                <label htmlFor="name">名前：</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleForm} />
            </div>
            <div>
                <label htmlFor="prefecture">都道府県：</label>
                <input type="text" id="prefecture" name="prefecture" value={form.address.prefecture} onChange={handleFormNest} />
            </div>
            <div>
                <label htmlFor="city">市区町村：</label>
                <input type="text" id="city" name="city" value={form.address.city} onChange={handleFormNest} />
            </div>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}
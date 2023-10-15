import {useImmer} from "use-immer";

export default function StateNestImmer() {
    const[form, setForm] = useImmer({
        name: '山田太郎',
        address: {
            prefecture: '東京都',
            city: '千代田区'
        }
    });
    const handleNest = e => {
        const ns = e.target.name.split('.');
        setForm(form => {
            if(ns.length === 1) {
                form[ns[0]] = e.target.value;
            } else {
                form[ns[0]][ns[1]] = e.target.value;
            }
        })
    }
    const show = () => {
        console.log(`${form.name}は${form.address.prefecture}${form.address.city}に住んでいます`);
    }
    return (
        <form>
            <div>
                <label htmlFor="name">名前：</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="prefecture">都道府県：</label>
                <input type="text" id="prefecture" name="address.prefecture" value={form.address.prefecture} onChange={handleNest} />
            </div>
            <div>
                <label htmlFor="city">市区町村：</label>
                <input type="text" id="city" name="address.city" value={form.address.city} onChange={handleNest} />
            </div>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}
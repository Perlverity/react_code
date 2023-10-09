import {useState} from "react";

export default function FormCheckMulti () {
    const [form, setForm] = useState({
        animal: ["cat", "dog", "bird"]
    });
    const handleFormMulti = e => {
        const fa = form.animal;
        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            fa.splice(fa.indexOf(e.target.value), 1);
        }
        setForm({
            ...form,
            [e.target.name]: fa,
        });
    };
    const show = () => {
        console.log(form.animal);
    }

    return (
        <form>
            <fieldset>
                <legend>好きな動物</legend>
                <label htmlFor="animal-cat">猫</label>
                <input type="checkbox" id="animal-cat" name="animal" value="cat" checked={form.animal.includes("cat")}
                       onChange={handleFormMulti}/>
                <label htmlFor="animal-dog">犬</label>
                <input type="checkbox" id="animal-dog" name="animal" value="dog" checked={form.animal.includes("dog")}
                       onChange={handleFormMulti}/>
                <label htmlFor="animal-bird">鳥</label>
                <input type="checkbox" id="animal-bird" name="animal" value="bird"
                       checked={form.animal.includes("bird")} onChange={handleFormMulti}/>
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}
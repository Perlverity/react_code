import {useRecoilState} from 'recoil';
import {useState} from 'react';
import {idsAtom, todoListSelector} from "./store/atomUp";
import './StateTodo.css'

export default function RecoilTodoUp () {
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useRecoilState(todoListSelector)
    const [ids, setIds] = useRecoilState(idsAtom)

    const handleChangeTitle = e => setTitle(e.target.value)
    const handleAdd = () => {
        const newId = Math.max(...(ids.length ? ids : [0])) + 1
        setTodo({
            type: 'add',
            newItem:
                {
                    id: newId,
                    title,
                    isDone: false
                }
        })
    }
    const handleDone = e => {
        setTodo({
            type: 'done',
            id: Number(e.target.dataset.id)
        })
    }
    const handleRemove = e => {
        setTodo({
            type: 'remove',
            id: Number(e.target.dataset.id)
        })
    }

    return (
        <div>
            <label>
                Todo：
                <input type={"text"} name={"todo"} value={title} onChange={handleChangeTitle}/>
            </label>
            <button type={"button"} onClick={handleAdd}>追加</button>
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        <span>{item.title}</span>
                        <button type={"button"} data-id={item.id} onClick={handleDone}>完了</button>
                        <button type={"button"} data-id={item.id} onClick={handleRemove}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
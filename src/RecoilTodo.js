import {useRecoilState, useRecoilValue} from 'recoil';
import {useState} from 'react';
import {todoAtom, todoLastIdSelector} from "./store/atom";
import './StateTodo.css'

export default function RecoilTodo() {
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useRecoilState(todoAtom)
    const maxId = useRecoilValue(todoLastIdSelector)

    const handleChangeTitle = e => setTitle(e.target.value)
    const handleAdd = () => {
        setTodo([
            ...todo,
            {
                id: maxId + 1,
                title,
                isDone: false
            }
        ])
    }
    const handleDone = e => {
        setTodo(todo.map(item => {
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                }
            } else {
                return item
            }
        }))
    }
    const handleRemove = e => {
        setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)))
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
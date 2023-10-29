import {atom, selector} from 'recoil';

export const counterAtom = atom({
    key: 'counterAtom',
    default: 0
})

export const todoAtom = atom({
    key: 'todosAtom',
    default: [
        {
            id: 1,
            title: '牛乳を買う',
            isDone: false
        },
        {
            id: 2,
            title: '本を買う',
            isDone: false
        }
    ]
})

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({get}) => {
        const todo = get(todoAtom)
        return todo.at(-1)?.id ?? 0
    }
})
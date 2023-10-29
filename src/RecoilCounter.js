import {useRecoilState} from 'recoil';
import {counterAtom} from './store/atom';

export default function RecoilCounter() {
    const [counter, setCounter] = useRecoilState(counterAtom)

    const handleClick = () => {
        setCounter(count => count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>カウントアップ</button>
            <p>{counter}</p>
        </>
    )
}
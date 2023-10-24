import {Suspense} from "react";
import ThrowPromise from "./ThrowPromise";

export default function SuspenseSimple() {
    return (
        <Suspense fallback={<p>読み込み中...</p>}>
            <ThrowPromise />
        </Suspense>
    )
}
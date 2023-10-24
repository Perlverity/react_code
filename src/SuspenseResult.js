import {Suspense} from "react";
import ThrowResult from "./ThrowResult";

export default function SuspenseResult() {
    return (
        <Suspense fallback={<p>読み込み中...</p>}>
            <ThrowResult />
        </Suspense>
    )
}
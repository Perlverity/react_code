import React from "react";
import "./SelectStyle.css";
import cn from "classnames";

export default function SelectStyle ({mode}) {
    return (
        <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
            Hello, React!
        </div>
    );
}
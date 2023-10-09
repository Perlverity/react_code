import React from "react";

export default function ListTemplate ({ src, children }) {
    return (
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem.ISBN}>
                    {children(elem)}
                </React.Fragment>
            ))}
        </dl>
    );
}
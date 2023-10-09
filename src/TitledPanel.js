import React from "react";

export default function TitledPanel ({ children }) {
    const title = children.find(elem => elem.key === 'title');
    const body = children.find(elem => elem.key === 'body');

    return (
        <div style={{
            margin:50,
            padding:20,
            border:'solid 1px #000',
            width: 'fit-content',
            boxShadow: '10 5 5 #999',
            backgroundColor: '#fff',
        }}>
            {title}
            <hr />
            {body}
        </div>
    );
}
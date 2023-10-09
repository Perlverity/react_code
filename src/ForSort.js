import React from "react";
import books from "./books"

export default function ForSort ({src}) {
    src.sort((m, n) => n.price - m.price);
    return (<dl>
            {src.map(elem => (<React.Fragment key={elem.ISBN}>
                    <dt>
                        <a href={elem.url}>{elem.title} ({elem.price}円)</a>
                    </dt>
                    <dd>{elem.summary}
                    {books.length > 0 && `${books.length}冊の本があります。`}
                    </dd>

                </React.Fragment>))}
        </dl>)
}
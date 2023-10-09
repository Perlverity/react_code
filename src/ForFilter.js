import React from "react";
import books from "./books";

export default function ForFilter ({src}) {
    const lowPrice = books.filter(book => book.price < 3500);
    return (<dl>
            {lowPrice.map(elem => (<React.Fragment key={elem.ISBN}>
                    <dt>
                        <a href={elem.url}>{elem.title} ({elem.price}円)</a>
                    </dt>
                    <dd>{elem.summary}</dd>
                </React.Fragment>))}
        </dl>)
}
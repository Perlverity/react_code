import React from "react";

export default function ForItem ({ book }) {
    return(
        <>
            <a href={book.ISBN}>{book.title} ({book.price}円)</a>
            {book.boolean ? book.title : null}
        </>
    )
}
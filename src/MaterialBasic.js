/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Button} from '@mui/material';

export default function MaterialBasic () {
    const style = css`
      text-transform: none;
    `
    return (
        <>
            <Button variant={"text"} css={style}>Text</Button>
            <Button variant={"contained"} css={style}>Contained</Button>
            <Button variant={"outlined"} css={style}>Outlined</Button>
        </>
    )
}
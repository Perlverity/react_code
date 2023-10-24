import React from "react";

export default function StyledBasic() {
    return (
        <>
            <style jsx>{`
              .panel {
                width: 300px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                background: royalblue;
                color: white;
              }
            `}</style>
        </>
    )
}
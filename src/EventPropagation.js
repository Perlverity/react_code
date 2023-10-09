import React from "react";

export default function EventPropagation () {
    const handleParent = () => alert('#parent run...');
    const handleMy = () => alert('#my run...');
    // const handleChild = () => alert('#child run...');
    const handleChild = e => {
        e.stopPropagation();
        alert('#child run...')
    };

    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <div id="child" onClick={handleChild}>
                    子要素
                </div>
            </div>
        </div>
    );
}
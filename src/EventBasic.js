export default function EventBasic({ type }) {
    // clickイベントハンドラー
    const current = () => {
        // type 属性の値に応じて現在日時をログに出力
        switch (type) {
            case 'date':
                console.log(new Date().toLocaleDateString());
                break;
            case 'time':
                console.log(new Date().toLocaleTimeString());
                break;
            default:
                console.log(new Date().toLocaleString());
                break;
        }
    };

    return (
        <button onClick={current}>現在日時を取得</button>
    );
}
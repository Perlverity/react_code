import styled from 'styled-components';

const MyPanel = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
    `;

export default function StyledComp() {
    return (
        <MyPanel>
            <p>これは、コンポーネントにスタイルを適用するサンプルです。</p>
        </MyPanel>
    )
}
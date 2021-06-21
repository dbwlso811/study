import React from 'react';

function App() {
    const name = '리액트';
    const style = {
        // background-color -> backgroundColor (카멜 표기법)
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16 // 단위생량하면 px로 지정됨
    }
    return <div style={style}>{name}</div>;
}

export default App;

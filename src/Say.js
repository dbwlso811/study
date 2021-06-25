import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickOk = () => setMessage('안녕하세요!');
    const onClickNo = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickOk}>입장</button>
            <button onClick={onClickNo}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    );
};

export default Say;

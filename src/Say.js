import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickOk = () => setMessage('안녕하세요!');
    const onClickNo = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickOk}>입장</button>
            <button onClick={onClickNo}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;

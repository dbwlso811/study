import React, {useState} from 'react';

const Counter = () => {
    //const [ 초깃값, ? ] = useState(0);
    const [ number ,setNumber ] = useState(0);
    const onClick = () => {
        // setNumber(초깃값 + 1)
        setNumber(number+1)
    };
    return (
        <div>
            <h1>{number}</h1>
            <button
                // onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정
                onClick={onClick}>
                +1
            </button>
        </div>
    );


};

export default Counter;

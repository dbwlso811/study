import React from 'react';

function App() {
    const name = '리액터';
    return (
        <div>
            {name === '리액트' &&
                <h1>리액트 입니다.</h1>}
        </div>
    );
}

export default App;

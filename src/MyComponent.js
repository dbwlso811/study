import React from 'react';
import PropTypes from 'prop-types';

const Mycomponent = ({name, children}) => {
    return (
    <div>
        안녕하세요, 제 이름은 {name}입니다. <br/>
        children 값은 {children}
        입니다.
    </div>
    );
};

Mycomponent.defaultProps = {
    name:'기본이름'
};
// 무조건 문자 형태로 전달
Mycomponent.proptype = {
    name: PropTypes.string
};
export default Mycomponent;

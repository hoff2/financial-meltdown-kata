import React from 'react';
import PropTypes from 'prop-types';

const CreditApplicationContainer = (props) => (
    <div>
        <header>Credit Application</header>
        <div className='userId'>{'User: '} {props.userId}</div>
    </div>
);

CreditApplicationContainer.propTypes = {
    userId: PropTypes.string
};

export default CreditApplicationContainer;
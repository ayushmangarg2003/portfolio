import React from 'react';
import './SubHeader.css';

const SubHeader = (props) => {
  return (
    <div className='header'>
      <section>
        <p className='subhead'>{props.heading}</p>
      </section>
    </div>
  );
};

export default SubHeader;

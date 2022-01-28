import React from 'react';
import Icons from '../icons/Icons';
import './Displaynote.scss';

function Displaynote() {
  return <div>
    <div className='main-display'>
    <div className='container'>
            <div className='title'>wakeup</div>
            <div className='notes'>morning time</div>
            <div className='icons'><Icons/></div>
      </div>
    </div>
     
  </div>;
}

export default Displaynote;
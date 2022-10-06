import React, {useState} from 'react'
import toggle from './Toggle.module.scss';
import clsx from 'clsx';

export default function Toggle() {

  const [toggleStatus, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(toggleStatus?false:true);   
  }  

  return (
    <div>
        <div className={clsx(toggle.content, toggleStatus&&toggle.show)}>
            <h1>Nội dung</h1>
        </div>
        <button onClick={handleToggle} type='button'>Toggle</button>
    </div>
  )
}

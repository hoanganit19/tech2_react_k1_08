import React from 'react'
import button from './Button.module.css';
import clsx from "clsx";

export default function ButtonInner() {
  return (
    <div>
        <button type='button' className={clsx("btn", button["btn-danger"])}>
            React JS
        </button>
    </div>
  )
}

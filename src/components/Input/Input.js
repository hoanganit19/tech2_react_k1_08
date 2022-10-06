import React from 'react'
import input from './Input.module.scss';
import clsx from "clsx";

export default function Input() {
  return (
    <div className={clsx(input['btn-success'])}>Input</div>
  )
}

import React from 'react';
import './Input.scss';

export default function Input({ size, ...props }) {
  return <input className={('input', `input--${size}`)} {...props}></input>;
}

import React from 'react';
import './Textarea.scss';

export default function Textarea({ size, ...props }) {
  return (
    <textarea
      className={('textarea', `textarea--${size}`)}
      {...props}
    ></textarea>
  );
}

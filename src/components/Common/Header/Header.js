import React from 'react';
import './Header.scss';

export default function Header({ backgroundColor, ...props }) {
  return (
    <header {...props} style={backgroundColor && { backgroundColor }}></header>
  );
}

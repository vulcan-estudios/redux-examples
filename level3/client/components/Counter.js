import React from 'react';

export default function Counter (props = {}) {
  const { value } = props;
  const text = value < 0 ? value : `+${value}`;
  return (
    <strong>Contador: {text}</strong>
  );
}

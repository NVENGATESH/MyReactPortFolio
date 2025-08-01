import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TypeEffect() {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator'],
    loop: 0, // 0 = infinite
    delaySpeed: 2000,
  });

  return (
    <h1 style={{ fontSize: '2rem', color: '#e57399' }}
>
       <span style={{ color: '#e57399' }}>{text}</span>
      <Cursor cursorStyle="|" />
    </h1>
  );
}

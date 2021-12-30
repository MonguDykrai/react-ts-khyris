import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { useTranslateToRemSize } from './utils';

function App() {
  const { padding, labelSize } = useTranslateToRemSize<{
    padding: number[];
    labelSize: number;
  }>({
    padding: [3, 3, 0, 0],
    labelSize: 14,
  });
  console.log(padding, labelSize);
  const { head } = useTranslateToRemSize<{ head: number }>({
    head: 80,
  });
  console.log(head);
  return <div>generic 示例</div>;
}

render(<App />, document.getElementById('root'));

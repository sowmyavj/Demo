
import React from 'react';
import { render } from 'react-dom';
import Demo from './Demo';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
      
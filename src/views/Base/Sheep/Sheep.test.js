import React from 'react';
import ReactDOM from 'react-dom';
import Sheep from './Sheep';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sheep />, div);
  ReactDOM.unmountComponentAtNode(div);
});

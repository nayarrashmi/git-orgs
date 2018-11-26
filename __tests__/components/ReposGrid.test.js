import React from 'react';
import ReactDOM from 'react-dom';
import ReposGrid from '../../app/components/ReposGrid';

test('mounts',()=> {
  const div = document.createElement('div');
  ReactDOM.render(<ReposGrid org="netflix"/>, div)
});


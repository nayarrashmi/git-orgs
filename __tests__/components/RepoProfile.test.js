import React from 'react';
import ReactDOM from 'react-dom';
import RepoProfile from '../../app/components/RepoProfile';

test('mounts',()=> {
  const div = document.createElement('div');
  ReactDOM.render(<RepoProfile repos={[{name:'rep1',description:'desc',owner:'own'},{'rep':2}]}/>, div)
});


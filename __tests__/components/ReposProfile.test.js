import React from 'react';
import ReactDOM from 'react-dom';
import RepoProfile from '../../app/components/RepoProfile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({ adapter: new Adapter() });


test('ReposGrid',()=> {
    const repos = [
        {
        name: 'jhfhj',
        stargazers_count: 2,
        forks_count:1,
        language: "dfbj",
        watchers: 3,
        owner: {
            login: "jshfjd"
        },
        description: "sbjs sjdbgdfj ejghrej"
    },
    {
        name: 'jfh',
        stargazers_count: 0,
        forks_count:45,
        language: "hf",
        watchers: 1,
        owner: {
            login: "hef"
        },
        description: "sdsjhfgjsg gbjrhbgj"
    },
]
  const component = shallow(<RepoProfile repos={repos}/>);
  expect(component).toMatchSnapshot();
});


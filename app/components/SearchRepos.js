var React =  require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');

var ReposGrid = require('./ReposGrid');



class SearchRepos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      org: null, //setting this as default view
    };
  }

  render(){
    var params = queryString.parse(this.props.location.search);
    return <ReposGrid org={params.org}/>
  }
}

module.exports = SearchRepos;
var React = require('react');
var PropTypes = require('prop-types');
var RepoProfile = require('./RepoProfile');
var Loading = require('./Loading');
var api = require('../utilities/api');
var sortHelper = require('../utilities/sortHelper');
var SortRepos = require('./SortRepos');
var OrgAvatar = require('./OrgAvatar');


class ReposGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      org: 'netflix', //setting this as default view
      loading: true,
      error:null,
      repos:null,
      selectedFilter:'Stars',
    };
    this.updateRepoOrder = this.updateRepoOrder.bind(this);
  }

  getOrganizationsRepos(organization){
    api.getOrganizationsRepos(organization)
      .then((repos) => {
        if(!repos || repos.length < 1){
          this.setState(()=> {
            return {
              error: 'Looks like there was an error. Check if the organzations exists on github',
              loading: false,
              repos:null,
              org:organization
            };
          })
        } else {
          this.setState(()=> {
            return {
              error: null,
              loading: false,
              org:organization,
              repos:repos
            };
          })
        }
      })
  }

  updateRepoOrder(sortParam){
    var param;
    this.setState(function(){
      return {
        selectedFilter: sortParam,
      }
    });
    switch (sortParam) {
      case 'Stars' : param = 'stargazers_count';
      break;
      case 'Forks' : param = 'forks';
        break;
      case 'Issues' : param = 'open_issues';
        break;
      case 'Watchers' : param = 'watchers';
      default: param = 'stargazers_count';
        break;
    }
    this.setState(()=>{
      return {
        repos: sortHelper.sortArrayOfObjects(this.state.repos,param)
      }
    })

  }

  componentDidMount(){
    this.getOrganizationsRepos(this.props.org);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.org && prevProps.org !== this.props.org) {
      this.getOrganizationsRepos(this.props.org);
      this.setState(()=> {
        return {
          selectedFilter:'Stars'
        };
      })
    }

  }

  render(){
    var error = this.state.error;
    var loading = this.state.loading;
    var repos = this.state.repos;

    if (loading === true) {
      return <Loading />
    }

    if (error) {
      return (
        <div className='container'>
          <p>{error}</p>
        </div>
      )
    }

    return (
      <div className='container'>
        <div className='repo-info'>
          <OrgAvatar
            org={this.state.org}
          />
          <SortRepos
            selectedFilter={this.state.selectedFilter} onSelect={this.updateRepoOrder}
          />
        </div>
          {!repos? <Loading /> : <RepoProfile repos={repos}/>}
      </div>
    )
  }
}

module.exports = ReposGrid;
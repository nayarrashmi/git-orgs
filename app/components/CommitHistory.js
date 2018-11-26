var React = require('react');
var PropTypes = require('prop-types');
var queryString = require('query-string');
var api = require('../utilities/api');
var Loading =require('./Loading');
var Link =require('react-router-dom').Link;

class CommitWidget extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sha: null,
      authorName: null,
      avatar: null,
      repo:null,
    };
  }
    render() {
      var commit = this.props.commit;
      return (
        <li key={commit.id} className='repo-item'>
          <h3>
            <a href={commit.html_url} target="_blank">
              {commit.sha.substring(0,10)}
            </a>
          </h3>
          <div>
            Commit Message: {commit.commit.message}
          </div>
          <div className='widget'>
            <div className='widget-item'>
              Author Name: {commit.commit.author.name}
            </div>
            <div className='widget-item'>
              Author Email: {commit.commit.author.email}
            </div>
            <div className='widget-item'>
              Date: {commit.commit.author.date}
            </div>
          </div>

        </li>
      )
    }

}
class CommitHistory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      loading: true,
      commits: null,
      repo:null,
    };
  }

  componentDidMount() {
    var repoInfo = queryString.parse(this.props.location.search);
    this.setState(()=>{
      return {
        repo:repoInfo.name
      }
    });
    api.getCommitHistory(repoInfo)
      .then((commits) =>{
        if (commits && Array.isArray(commits)) {
          this.setState(()=>{
            return {
              commits: commits,
              error:null,
              loading:false
            }
          })
        } else {
          this.setState(()=>{
            return {
              error: "There was some error while retrieving the commit history. Try browsing to another repo"
            }
          })
        }

      })
  }

    render(){
      var error = this.state.error;
      var loading = this.state.loading;
      var commits = this.state.commits;

      if(loading === true) {
        return <Loading />
      }

      if (error) {
        return (
          <div className='container'>
            <p>{error}</p>
          </div>
        )
      }

      if(commits) {
        return (
          <div className='container'>
            <h2>Commit history: {this.state.repo}</h2>
            <ul className='repos-list'>
              {
                commits.map((commit) => {
                  return (
                    <CommitWidget commit={commit} key={commit.sha}/>
                  )
                })
              }
            </ul>
          </div>


        )
      }

  }
}

module.exports = CommitHistory;
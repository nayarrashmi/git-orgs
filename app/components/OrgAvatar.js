var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utilities/api');
var Loading = require('./Loading');
class OrgAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      error: null,
      org: props.org,
      info:null
    }
  }
  updateOrgData(){
    api.getOrganizations(this.props.org)
      .then((orgData)=>{
        if(orgData) {
          this.setState(()=>{
            return {
              info: orgData,
              error:null,
              loading:false
            }
          })
        } else {
          this.setState(()=>{
            return {
              info: null,
              error:'There was some error while getting Avatar Info',
              loading:false
            }
          })
        }

      })
  }
  componentDidMount() {
    this.updateOrgData()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.org && prevProps.org !== this.props.org){
      this.updateOrgData();
    }

  }
  render() {
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

    return(
      <div className='avatar-grid'>
        <div className='avatar-grid-item'>
          <img
            className='avatar'
            src={this.state.info.avatar_url}
            alt={'Avatar for ' + this.props.org}
          />
        </div>
        <div className='avatar-grid-item'>
          <h2>{this.props.org}</h2>
          <div>{this.state.info.description}</div>
        </div>


      </div>
    )
  }
}

OrgAvatar.propTypes = {
  org: PropTypes.string.isRequired
};

module.exports = OrgAvatar;
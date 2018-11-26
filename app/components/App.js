var React = require('react');
var PropTypes = require('prop-types');
var OrgInput = require('./OrgInput');
var Nav = require('./Nav');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var CommitHistory = require('./CommitHistory');
var SearchRepos = require('./SearchRepos');
var Redirect = ReactRouter.Redirect;




class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      org:'netflix'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(name) {
    this.setState(() =>{
      return {
        org:name
      }
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Nav onSubmit={this.handleSubmit}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path='/org' component={SearchRepos} />
            <Route  path='/commits' component={CommitHistory} />
            <Route render={function(){
              return <p>Not Found!</p>}
            } />
            }}
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
var React =  require('react');
var ReposGrid = require('./ReposGrid');


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      org:'netflix'
    };
  }

  render(){
    return (
      <div className='container'>
        <ReposGrid org={this.state.org}/>
      </div>
    )
  }
}

module.exports = Home;
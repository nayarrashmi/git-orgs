var React = require('react');
var PropTypes = require('prop-types');
var OrgInput = require('./OrgInputForm');

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      org: ''
    };

  }
  render () {
    return (
      <div className='nav-bar'>
        <div className='nav'>
          {/*going to use a image from the internet as a logo temporarily*/}
          <div>
            <img
              src="https://static.wixstatic.com/media/b26fc7_c903a74d8e11419e9f0d17ac426c452b~mv2_d_2048_2048_s_2.jpg/v1/fill/w_1120,h_1120,al_c,q_90,usm_0.66_1.00_0.01/b26fc7_c903a74d8e11419e9f0d17ac426c452b~mv2_d_2048_2048_s_2.webp"
              height="30" width="30"
              style={{'marginTop':'2px'}}
            />
          </div>
          <div>
            <OrgInput placeHolder='Enter an Organization'/>
          </div>

        </div>
      </div>

    )
  }
}

module.exports = Nav;
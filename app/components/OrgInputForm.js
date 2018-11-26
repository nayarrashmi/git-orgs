var React = require('react');
var PropTypes = require('prop-types');
var Link =require('react-router-dom').Link;
var {Redirect}  = require('react-router-dom');
var Home = require('./Home');



class OrgInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        inputValue: value
      }
    });
  }
  handleSubmit(event){
    event.preventDefault();

    this.props.onSubmit(
      this.state.inputValue
    );
  }

  render() {
    return(
      <form className='input-search' onSubmit = {this.handleSubmit}>
        <input
          placeholder={this.props.placeHolder}
          type='text'
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.inputValue}>
          Submit
        </button>
        {/*<Link*/}
          {/*className='button'*/}
          {/*type='button'*/}
          {/*to={{*/}
            {/*pathname: '/org',*/}
            {/*search: `?org=${this.state.inputValue}`*/}
          {/*}}*/}
        {/*>*/}
          {/*Submit*/}
        {/*</Link>*/}
      </form>
    )
  }
}

OrgInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};
OrgInput.defaultProps = {
  placeHolder: 'Type here..',
};

module.exports = OrgInput;
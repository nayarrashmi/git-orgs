var React = require('react');
var PropTypes = require('prop-types');
var Link =require('react-router-dom').Link;
var {Redirect}  = require('react-router-dom');



class OrgInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
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
    //to be modified to handle more onSubmit activity
    this.props.onSubmit(this.state.inputValue);

  }
  render() {
    return(
      <form className='input-search'>
        <input
          placeholder={this.props.placeHolder}
          type='text'
          autoComplete='off'
          onChange={this.handleChange}
        />
        <Link
          className='button'
          type='button'
          to={{
            pathname: '/org',
            search: `?org=${this.state.inputValue}`
          }}
          >
          Submit
        </Link>
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
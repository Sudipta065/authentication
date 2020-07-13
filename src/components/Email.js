/*import React from 'react';

// Initialize Firebase

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>;
  }
  return null;
}

class Email extends React.Component {
  state = {
    username: '',
    usernameValid: false,
    email: '',
    emailValid: false,

    formValid: false,
    errorMsg: {},
  };
  //&& passwordValid && passwordConfirmValid
  validateForm = () => {
    const { usernameValid, emailValid } = this.state;
    this.setState({
      formValid: usernameValid && emailValid,
    });
  };
  /* checking = (email) => {
    emailExistence.check(`${email}`, (error, response) => {
      console.log('res: ' + response);
    });
  };


  updateUsername = (username) => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = 'Must be at least 3 characters long';
    }

    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  /*verification = (verifyEmail) => {
    let response = fetch(
      `api.trumail.io/v2/lookups/json?email=${verifyEmail}`
    ).then((result) => console.log(result));
    console.log(response);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = 'Invalid email format';
    }

    //

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { username, email } = this.state;

    let emailObj = {
      username,
      email,
    };
    //this.checking(email);
    // this.verification(email);
    //this.verification('sudip.asd@kas.com');
    console.log(emailObj);
  };

  render() {
    return (
      <div className='form'>
        <header>Form Validation</header>
        <main role='main'>
          <form action='#' id='js-form' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <ValidationMessage
                valid={this.state.usernameValid}
                message={this.state.errorMsg.username}
              />
              <input
                type='text'
                id='username'
                name='username'
                className='form-field'
                value={this.state.username}
                onChange={(e) => this.updateUsername(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <ValidationMessage
                valid={this.state.emailValid}
                message={this.state.errorMsg.email}
              />
              <input
                type='email'
                id='email'
                name='email'
                className='form-field'
                value={this.state.email}
                onChange={(e) => this.updateEmail(e.target.value)}
              />
            </div>

            <div className='form-controls'>
              <button
                className='button'
                type='submit'
                disabled={!this.state.formValid}
              >
                Sign Up
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default Email;
*/

import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      btnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { name, email } = this.state;
      console.log(name, email);
      if (name && email) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
      }
    });
  }

  render() {
    const { btnDisabled } = this.state;
    return (
      <div>
        <form action="">
          <input
            type="text"
            data-testid="input-player-name"
            name="name"
            placeholder="Digite seu Nickname"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            data-testid="input-gravatar-email"
            name="email"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ btnDisabled }
          >
            Jogar
          </button>
          <button
            type="button"
            data-testid="btn-play"
          >
            configurações
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

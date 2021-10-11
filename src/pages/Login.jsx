import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPlayerEmail, setPlayerName, setPlayerToken } from '../store/actions';
import { getToken } from '../services/api';
import { saveTokenLocal, savePlayerDataLocal } from '../services/handleLocalStorage';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      btnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { name, email } = this.state;
      if (name && email) {
        this.setState({ btnDisabled: false });
      } else {
        this.setState({ btnDisabled: true });
      }
    });
  }

  async handleClick() {
    const { setName, setEmail, setToken } = this.props;
    const { name, email } = this.state;

    const token = await getToken();

    setName(name);
    setEmail(email);
    setToken(token);

    saveTokenLocal(token);
    savePlayerDataLocal({ name, email, token });
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
          <Link to="/game">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ btnDisabled }
              onClick={ this.handleClick }
            >
              Jogar
            </button>
          </Link>
          <Link to="/settings">
            <button
              type="button"
              data-testid="btn-settings"
            >
              configurações
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setPlayerName(name)),
  setEmail: (email) => dispatch(setPlayerEmail(email)),
  setToken: (token) => dispatch(setPlayerToken(token)),
});

const mapStateToProps = (state) => ({
  // token: state.player.token,
  player: state.player,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

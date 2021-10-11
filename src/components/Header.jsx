import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  getGravatarURL() {
    const { player: {email} } = this.props;
    return `https://www.gravatar.com/avatar/${md5(email).toString()}`;
  }

  render() {
    const { player: { name } } = this.props;
    return (
      <header>
        <img src={ this.getGravatarURL() } alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">0</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Header);

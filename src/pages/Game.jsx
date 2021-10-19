import React from 'react';
import { connect } from 'react-redux';
// import { fetchQuestions } from '../store/actions';

import Header from '../components/Header';
import Question from '../components/Question';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.nextQuestion = this.nextQuestion.bind(this);

    this.state = {
      actualQuestion: 0,
    };
  }

  // componentDidMount() {
  //   const { token, storeQuestions } = this.props;
  //   storeQuestions(token);
  // }

  nextQuestion() {
    console.log('entrou');
    this.setState((state) => ({ actualQuestion: state.actualQuestion + 1 }));
  }

  render() {
    const { actualQuestion } = this.state;
    const { questions: { questions } } = this.props;
    return (
      <div>
        <Header />
        {/* <Question questionData={ questions[actualQuestion] } /> */}
        { questions.length
          ? <Question questionData={ questions[actualQuestion] } /> : null }
        <button type="button" onClick={ this.nextQuestion }>
          próxima
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // storeQuestions: (token) => dispatch(fetchQuestions(token)),
});

const mapStateToProps = (state) => ({
  token: state.player.token,
  questions: state.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

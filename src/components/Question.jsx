import React from 'react';
import '../styles/Question.css';

function defineAnswer(alternative, question) {
  return alternative === question.correct_answer
    ? 'correct-answer' : 'wrong-answer';
}

function shuffleAnswers(alternatives) {
  for (let i = alternatives.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [alternatives[i], alternatives[j]] = [alternatives[j], alternatives[i]];
  }
  return alternatives;
}

class Question extends React.Component {
  constructor(props) {
    super(props);

    const { questionData } = this.props;

    const alternatives = shuffleAnswers([
      ...questionData.incorrect_answers, questionData.correct_answer,
    ]);

    this.answerQuestion = this.answerQuestion.bind(this);

    this.state = {
      alternatives,
      category: questionData.category,
      question: questionData.question,
      time: 30,
      showAnswer: false,
    };
  }

  answerQuestion() {
    this.setState({ showAnswer: true });
  }

  render() {
    const { showAnswer, time, alternatives, category, question } = this.state;
    const { questionData } = this.props;
    return (
      <div>
        <h4 data-testid="question-text">{ question }</h4>
        <p data-testid="question-category">{ category }</p>
        {alternatives.map((alternative, index) => (
          <button
            data-testid={ defineAnswer(alternative, questionData) }
            disabled={ showAnswer }
            className={ showAnswer ? defineAnswer(alternative, questionData) : null }
            key={ index }
            onClick={ this.answerQuestion }
            type="button"
          >
            {alternative}
          </button>
        ))}
      </div>
    );
  }
}

export default Question;

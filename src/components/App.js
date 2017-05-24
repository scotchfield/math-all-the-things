import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import operations from '../operations';

import Answer from './Answer';
import Button from './Button';
import OperatorBar from './OperatorBar';
import Question from './Question';
import SelectorBar from './SelectorBar';


const styles = StyleSheet.create({
  app: {
    '@media (max-width: 800px)': {
      fontSize: '150%',
    },
  },
  container: {
    paddingBottom: '32px',
    textAlign: 'center',
  },
});

export default class App extends Component {
  constructor() {
    super();

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let selectors = {};

    numbers.forEach(x => selectors[x] = true);

    this.setState({
      numbers,
      selectors,
      activeOperation: 'multiply',
      question: '',
      answer: '',
      showAnswer: false,
    });

    this.toggleAnswer = this.toggleAnswer.bind(this);
    this.toggleSelector = this.toggleSelector.bind(this);
    this.generateQuestion = this.generateQuestion.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }
  toggleSelector(number) {
    let selectors = this.state.selectors;

    selectors[number] = ! selectors[number];

    this.setState({ selectors })
  }
  generateQuestion() {
    let choices = [];

    this.state.numbers.forEach(x => {
      if (this.state.selectors[x]) {
        choices.push(x);
      }
    });

    if (choices.length > 0) {
      let a = choices[Math.floor(Math.random() * choices.length)];
      let b = choices[Math.floor(Math.random() * choices.length)];
      let op = operations[this.state.activeOperation];

      this.setState({
        question: `${a} ${op.symbol} ${b}`,
        answer: op.f(a, b),
        showAnswer: false,
      })
    }
  }
  toggleAnswer() {
    this.setState({ showAnswer: ! this.state.showAnswer });
  }
  setOperation(operation) {
    this.setState({ activeOperation: operation });
  }
  render() {
    return (
      <div className={css(styles.app)}>
        <SelectorBar
          numbers={this.state.numbers}
          selectors={this.state.selectors}
          toggleSelector={this.toggleSelector}
        />

        <OperatorBar
          operations={operations}
          activeOperation={this.state.activeOperation}
          setOperation={this.setOperation}
        />

        <Question
          question={this.state.question}
          generate={this.generateQuestion}
        />

        <Answer answer={this.state.answer} />
      </div>
    );
  }
}

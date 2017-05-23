import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import Answer from './Answer';
import SelectorBar from './SelectorBar';


const styles = StyleSheet.create({
  button: {
    background: '#3498db',
    borderRadius: '28px',
    color: '#ffffff',
    cursor: 'pointer',
    margin: '8px',
    padding: '10px 20px 10px 20px',
    textDecoration: 'none',
  },
  inactive: {
    opacity: '0.2',
  },
  container: {
    paddingBottom: '32px',
    textAlign: 'center',
  },
  question: {
    fontSize: '48pt',
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  constructor() {
    super();

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let selectors = {};

    numbers.forEach(x => selectors[x] = true);

    let operations = {
      add: {
        symbol: '+',
        f: (a, b) => a + b,
      },
      subtract: {
        symbol: '-',
        f: (a, b) => a - b,
      },
      multiply: {
        symbol: '\u{00D7}',
        f: (a, b) => a * b,
      },
      divide: {
        symbol: '\u{00F7}',
        f: (a, b) => b === 0 ? 'undefined' : a / b,
      }
    };

    this.setState({
      numbers,
      selectors,
      operations,
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
      let op = this.state.operations[this.state.activeOperation];

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
      <div>
        <SelectorBar
          numbers={this.state.numbers}
          selectors={this.state.selectors}
          toggleSelector={this.toggleSelector}
        />
        <div className={css(styles.container)}>
          { Object.keys(this.state.operations).map(key =>
            <a className={css(styles.button, this.state.activeOperation !== key ? styles.inactive : null)} onClick={() => this.setOperation(key)}>
              { this.state.operations[key].symbol }
            </a>
          ) }
        </div>
        <div className={css(styles.container)}>
          <a className={css(styles.button)} onClick={this.generateQuestion}>
            Question
          </a>
        </div>
        <div className={css(styles.container)}>
          <span className={css(styles.question)}>
            { this.state.question }
          </span>
        </div>
        <Answer answer={ this.state.answer } />
      </div>
    );
  }
}

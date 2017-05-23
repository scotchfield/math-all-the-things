import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import SelectorBar from './components/SelectorBar';


const styles = StyleSheet.create({
  button: {
    background: '#3498db',
    borderRadius: '28px',
    color: '#ffffff',
    cursor: 'pointer',
    marginTop: '16px',
    padding: '10px 20px 10px 20px',
    textDecoration: 'none',
  },
  container: {
    paddingBottom: '16px',
    textAlign: 'center',
  },
  question: {
    fontSize: '48pt',
    fontWeight: 'bold',
  },
  answer: {
    fontSize: '64pt',
    fontWeight: 'bold',
  },
  hidden: {
    display: 'none',
  }
});



class App extends Component {
  constructor() {
    super();

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
  render() {
    return (
      <div>
        <SelectorBar
          numbers={this.state.numbers}
          selectors={this.state.selectors}
          toggleSelector={this.toggleSelector.bind(this)}
        />
        <div className={css(styles.container)}>
          <a className={css(styles.button)} onClick={this.generateQuestion.bind(this)}>
            Question
          </a>
        </div>
        <div className={css(styles.container)}>
          <span className={css(styles.question)}>
            { this.state.question }
          </span>
        </div>
        <div className={css(styles.container)}>
          <a className={css(styles.button)} onClick={this.toggleAnswer.bind(this)}>
            Toggle Answer
          </a>
        </div>
        <div className={css(styles.container, this.state.showAnswer ? null : styles.hidden)}>
          <span className={css(styles.answer)}>
            { this.state.answer }
          </span>
        </div>
      </div>
    );
  }
}

render((
  <div id="app">
    <App />
  </div>
), document.getElementById('app'));

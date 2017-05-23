import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  selector: {
    float: 'left',
    width: '8.33%',
  },
  circle: {
    backgroundColor: 'DeepSkyBlue',
    borderRadius: '16px',
    height: '48px',
    lineHeight: '48px',
    margin: 'auto',
    textAlign: 'center',
    width: '75%',
  },
  active: {
    opacity: '1.0',
  },
  inactive: {
    opacity: '0.2',
  },
  selectorBar: {
    height: '72px',
  },
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
    marginTop: '32px',
  },
});


class Selector extends Component {
  render(props) {
    let status = props.active ? styles.active : styles.inactive;

    return (
      <div className={css(styles.selector, status)}>
        <div className={css(styles.circle)} onClick={e => { props.toggleSelector(props.number); }}>
          {props.number}
        </div>
      </div>
    );
  }
}

class SelectorBar extends Component {
  render(props) {
    return (
      <div className={css(styles.selectorBar)}>
        { props.numbers.map(x =>
            <Selector
              number={x}
              active={props.selectors[x]}
              toggleSelector={props.toggleSelector}
            />
        ) }
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let selectors = {};
    let question = [];

    numbers.forEach(x => selectors[x] = true);

    this.setState({
      numbers,
      selectors,
      question,
    });
  }
  toggleSelector(number) {
    let selectors = this.state.selectors;
    selectors[number] = ! selectors[number];
    this.setState({ selectors })
  }
  generateQuestion() {
    let values = [];

    this.state.numbers.forEach(x => {
      if (x) {
        values.push(x);
      }
    });

    if (values.length > 0) {
      this.setState({ question: [
        values[Math.floor(Math.random() * values.length)],
        values[Math.floor(Math.random() * values.length)]
      ] });
    }
  }
  render() {
    let question = this.state.question.length === 2 ?
      `${this.state.question[0]} × ${this.state.question[1]}` : '';

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
            { question }
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

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
  buttonContainer: {
    textAlign: 'center',
  }
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

    numbers.forEach(x => selectors[x] = true);

    this.setState({
      numbers,
      selectors,
    });
  }
  toggleSelector(number) {
    let selectors = this.state.selectors;
    selectors[number] = ! selectors[number];
    this.setState({ selectors })
  }
  generateQuestion() {
    alert('ok');
  }
  render() {
    return (
      <div>
        <SelectorBar
          numbers={this.state.numbers}
          selectors={this.state.selectors}
          toggleSelector={this.toggleSelector.bind(this)}
        />
        <div className={css(styles.buttonContainer)}>
          <a className={css(styles.button)} onClick={this.generateQuestion}>
            Question
          </a>
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

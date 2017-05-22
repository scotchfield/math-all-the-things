import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  selector: {
    float: 'left',
    width: '8.33%',
  },
  circle: {
    backgroundColor: 'DeepSkyBlue',
    borderRadius: '50%',
    height: '48px',
    lineHeight: '48px',
    margin: 'auto',
    textAlign: 'center',
    width: '48px',
  },
  active: {
    opacity: '1.0',
  },
  inactive: {
    opacity: '0.2',
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
  render() {
    return (
      <div>
        { this.state.numbers.map(x =>
            <Selector
              number={x}
              active={this.state.selectors[x]}
              toggleSelector={this.toggleSelector.bind(this)}
            />
        ) }
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <SelectorBar />;
  }
}

render((
  <div id="app">
    <App />
  </div>
), document.getElementById('app'));

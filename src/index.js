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
  inactive: {
    opacity: '20%',
  }
});

const store = {
  selectors: {},
  question: [],
};

function toggleSelector(number, value) {
  store.selectors[number] = value !== undefined ? value : ! store.selectors[number];
}

class Selector extends Component {
  render(props, state) {
    return (
      <div className={css(styles.selector)}>
        <div className={css(styles.circle)} onClick={e => toggleSelector(props.number)}>
          {props.number}
        </div>
      </div>
    );
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers.forEach(x => toggleSelector(x, true));

render((
  <div id="app">
    { numbers.map(x => <Selector number={x} />) }
  </div>
), document.getElementById('app'));

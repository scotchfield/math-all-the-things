import { h, render, Component } from 'preact';

class Selector extends Component {
  render(props) {
    return (
      <div className="selector">
        {props.number}
      </div>
    );
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

render((
  <div id="app">
    { numbers.map(x => <Selector number={x} />) }
  </div>
), document.getElementById('app'));

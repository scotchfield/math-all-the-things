import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import Selector from './Selector';


const styles = StyleSheet.create({
  selectorBar: {
    height: '72px',
  },
});

export default class SelectorBar extends Component {
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

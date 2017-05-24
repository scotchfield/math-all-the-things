import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import Button from './Button';


const styles = StyleSheet.create({
  operatorBar: {
    paddingBottom: '32px',
    textAlign: 'center',
  },
});

export default class OperatorBar extends Component {
  render(props) {
    return (
      <div className={css(styles.operatorBar)}>
        { Object.keys(props.operations).map(key =>
          <Button
            click={() => props.setOperation(key)}
            content={props.operations[key].symbol}
            inactive={props.activeOperation !== key}
          />
        ) }
      </div>
    );
  }
}

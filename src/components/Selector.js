import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  selector: {
    float: 'left',
    width: '7.69%',
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
});

export default class Selector extends Component {
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

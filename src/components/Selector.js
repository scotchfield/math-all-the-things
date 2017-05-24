import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  selector: {
    display: 'inline-block',
    margin: '8px 0.5%',
    width: '13%',
    '@media only screen and (min-width: 800px)': {
      margin: '0 0.5%',
      width: '6.5%',
    }
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

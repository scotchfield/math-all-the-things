import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  button: {
    background: '#3498db',
    borderRadius: '28px',
    color: '#ffffff',
    cursor: 'pointer',
    margin: '8px',
    padding: '10px 20px 10px 20px',
    textDecoration: 'none',
  },
});

export default class Button extends Component {
  render(props) {
    return (
      <a className={css(styles.button)} onClick={props.click}>
        {props.content}
      </a>
    );
  }
}

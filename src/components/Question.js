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
  container: {
    paddingBottom: '32px',
    textAlign: 'center',
  },
  question: {
    fontSize: '48pt',
    fontWeight: 'bold',
  },
});

export default class Question extends Component {
  render(props) {
    return (
      <div>
        <div className={css(styles.container)}>
          <a className={css(styles.button)} onClick={props.generate}>
            Question
          </a>
        </div>
        <div className={css(styles.container)}>
          <span className={css(styles.question)}>
            { props.question }
          </span>
        </div>
      </div>
    );
  }
}

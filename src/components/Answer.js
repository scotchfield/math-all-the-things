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
  answer: {
    fontSize: '64pt',
    fontWeight: 'bold',
  },
  hidden: {
    display: 'none',
  },
});

export default class Answer extends Component {
  constructor() {
    super();

    this.setState({ showAnswer: false });

    this.toggleAnswer = this.toggleAnswer.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({ showAnswer: false });
  }
  toggleAnswer() {
    this.setState({ showAnswer: ! this.state.showAnswer });
  }
  render(props) {
    return (
      <div>
        <div className={css(styles.container)}>
          <a className={css(styles.button)} onClick={this.toggleAnswer}>
            Toggle Answer
          </a>
        </div>
        <div className={css(styles.container, this.state.showAnswer ? null : styles.hidden)}>
          <span className={css(styles.answer)}>
            { props.answer }
          </span>
        </div>
      </div>
    );
  }
}

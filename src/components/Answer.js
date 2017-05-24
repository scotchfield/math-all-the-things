import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import Button from './Button';


const styles = StyleSheet.create({
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
          <Button click={this.toggleAnswer} content="Toggle Answer" />
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

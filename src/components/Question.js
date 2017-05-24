import { h, render, Component } from 'preact';
import { StyleSheet, css } from 'aphrodite';

import Button from './Button';


const styles = StyleSheet.create({
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
          <Button click={props.generate} content="Question" />
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

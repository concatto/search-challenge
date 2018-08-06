import React from 'react';
import NumberList from './NumberList';
import Typography from '@material-ui/core/Typography';

class ChallengeView extends React.Component {
  handleAttempt(value, isCorrect) {
    if (value === this.props.goal) {
      this.props.onSuccess();
    }
  }

  render() {
    return (
      <div>
        <NumberList
          numbers={this.props.numbers}
          onAttempt={(value, isCorrect) => this.handleAttempt(value, isCorrect)}
        />
        <br/>
        <Typography variant="display2">
          {this.props.goal}
        </Typography>
      </div>
    )
  }
}

export default ChallengeView;

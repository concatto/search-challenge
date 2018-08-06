import React from 'react';
import ChallengeView from './ChallengeView';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { generateNumbers, formatTime } from '../utils';

class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    setInterval(() => {
      const elapsed = new Date().getTime() - this.state.start;
      this.setState({elapsed});
    }, 5);
  }

  restartChronometer(shouldSort) {
    const max = 500;
    const goal = Math.ceil(Math.random() * max);
    const numbers = generateNumbers(100, max, shouldSort, goal);

    this.setState({
      start: new Date().getTime(),
      elapsed: 0,
      numbers,
      goal,
    });
  }

  handleAdvancement() {
    const { results, elapsed } = this.state;

    const newResults = results.concat(elapsed);
    this.setState({results: newResults});
    alert("Parabéns!");
    console.log(newResults);

    this.restartChronometer(newResults.length % 2 === 1);
  }

  render() {
    return (
      <div>
        {this.state.numbers !== undefined &&
          <ChallengeView
            goal={this.state.goal}
            numbers={this.state.numbers}
            onSuccess={() => this.handleAdvancement()}
          />
        }

        <Typography variant="display1">
          {formatTime(this.state.elapsed)}
        </Typography>

        <Button onClick={() => this.restartChronometer(false)}>
          Iniciar
        </Button>
      </div>
    )
  }
}

export default Sequencer;

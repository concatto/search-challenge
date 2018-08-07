import React from 'react';
import ChallengeView from './ChallengeView';
import ChartDialog from './ChartDialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { generateNumbers, formatTime } from '../utils';

const MAX_VALUE = 400;
const CHALLENGES = 6;
const NUMBER_COUNT = 140;

class Sequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    setInterval(() => {
      if (this.state.numbers !== undefined) {
        const elapsed = new Date().getTime() - this.state.start;
        this.setState({elapsed});
      }
    }, 5);
  }

  restartChronometer(shouldSort, reverse = false) {
    const goal = Math.ceil(Math.random() * MAX_VALUE);
    const numbers = generateNumbers(NUMBER_COUNT, MAX_VALUE, shouldSort, goal);

    if (reverse === true) {
      numbers.reverse();
    }

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

    if (newResults.length < CHALLENGES) {
      this.restartChronometer(newResults.length % 2 === 1, newResults.length % 3 === 0);
    }
  }

  reset() {
    this.setState({
      numbers: undefined,
      results: [],
      elapsed: 0,
    });
  }

  render() {
    const running = this.state.numbers !== undefined;
    const finished = this.state.results.length === CHALLENGES;

    return (
      <div>
        {!finished &&
          <div>
            {running &&
              <ChallengeView
                goal={this.state.goal}
                numbers={this.state.numbers}
                onSuccess={() => this.handleAdvancement()}
              />
            }

            <Typography variant="display1" style={{margin: 20}}>
              {formatTime(this.state.elapsed)}
            </Typography>

            {!running &&
              <Button onClick={() => this.restartChronometer(false)} color="primary" size="large" variant="raised">
                Iniciar
              </Button>
            }

            {running &&
              <Typography variant="headline">
                {this.state.results.length + 1} / {CHALLENGES}
              </Typography>
            }
          </div>
        }
        {finished &&
          <ChartDialog
            results={this.state.results}
            open={finished}
            onRestart={() => this.reset()}
          />
        }
      </div>
    )
  }
}

export default Sequencer;

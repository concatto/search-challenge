import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class ChartDialog extends React.Component {
  render() {
    const { results } = this.props;

    const data = {
      labels: Array.from(Array(results.length).keys()).map(v => v + 1),
      datasets: [
        {
          label: "Tempo",
          fill: false,
          lineTension: 0,
          backgroundColor: '#3f51b5',
          borderColor: '#3f51b5',
          borderCapStyle: 'butt',
          borderDash: [],
          borderJoinStyle: 'miter',
          pointBorderColor: '#3f51b5',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2.5,
          pointHitRadius: 10,
          pointRadius: 4,
          data: results
        }
      ]
    };

    const options = {};

    return (
      <div>
        <Dialog open={this.props.open} fullWidth maxWidth="md">
          <DialogTitle>Resultados</DialogTitle>
          <DialogContent>
            <Bar options={options} data={data}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onRestart} color="primary">
              Reiniciar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ChartDialog;

import React from 'react';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const border = "1px solid gray";
const styles = {
  cellContent: {
    top: "50%",
    position: "relative",
    transform: "translateY(-50%)",
  },
  cell: {
    height: "100%",
    cursor: "pointer",
    border: border,
    borderRight: "none",
  },
  tape: {
    borderRight: border,
    borderBottom: border,
    marginBottom: 20,
  }
};

class NumberList extends React.Component {
  createTiles(numbers) {
    const { goal, onAttempt = () => {} } = this.props;

    return numbers.map(value => (
      <GridListTile cols={1} key={value}>
        <div onClick={() => onAttempt(value, value === goal)} style={styles.cell}>
          <div style={styles.cellContent}>{value}</div>
        </div>
      </GridListTile>
    ));
  }

  render() {
    const cols = 20;

    return (
      <div>
        <GridList cellHeight={60} cols={cols} spacing={0} style={styles.tape}>
          {this.createTiles(this.props.numbers)}
        </GridList>
      </div>
    )
  }
}

export default NumberList;

import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import PieChart from './PieCharts/PieChart';
import DonutChart from './PieCharts/DonutChart';
const useStyles = makeStyles({
    root: {
      marginBottom: '10px'
    },
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  });
  
const PieCharts = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Card className={classes.root} variant="outlined">
                <PieChart/>
            </Card>
            <Card className={classes.root} variant="outlined">
                <DonutChart/>
            </Card>
        </div>
    )
}

export default PieCharts;
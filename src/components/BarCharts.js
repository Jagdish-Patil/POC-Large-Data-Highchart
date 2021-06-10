import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import ColumnChart from '../components/Bar/ColumnChart';
import NegativeBar from '../components/Bar/NegativeBar';
import FixedPlacement from '../components/Bar/FixedPlacement';
import StackedChart from '../components/Bar/StackedChart';
const useStyles = makeStyles({
    root: {
        'margin-bottom': '10px'
    },
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  });
const BarCharts = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Card className={classes.root} variant="outlined">
                <ColumnChart/>
            </Card>
             <Card className={classes.root} variant="outlined">
                <NegativeBar/>
            </Card>
           <Card className={classes.root} variant="outlined">
                <FixedPlacement/>
            </Card>
             <Card className={classes.root} variant="outlined">
                <StackedChart/>
            </Card>
        </div>
    )
}

export default BarCharts;
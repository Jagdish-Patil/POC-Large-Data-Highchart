import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import BasicLine from './BasicLine';
import Spline from './Spline';
import ZoomableTimeSeries from './ZoomableTimeseries';
import AnnotaionChart from './AnnotationChart';
import LargeDataTimeSeries from './LargeDataTimeSeries';
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
  
const TimeSeriesCharts = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Card className={classes.root} variant="outlined">
                <BasicLine/>
            </Card>
            <Card className={classes.root} variant="outlined">
                <Spline/>
            </Card>
            <Card className={classes.root} variant="outlined">
                <ZoomableTimeSeries/>
            </Card>
            <Card className={classes.root} variant="outlined">
                <AnnotaionChart/>
            </Card>
            <Card className={classes.root} variant="outlined">
                <LargeDataTimeSeries/>
            </Card>
        </div>
    )
}

export default TimeSeriesCharts;
import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as timeLineData from '../../Data/timeseries.json';
const StackedChart = () => {
    const categories = [];
    const deaceased = [];
    const recoverd = [];
    const confirmed = [];

    const data = () => {

        timeLineData.default.map((entry, index) => {
            if(index < 10){
                categories.push(entry.Date);
                deaceased.push(entry.DailyDeceased);
                recoverd.push(entry.DailyRecovered);
                confirmed.push(entry.DailyConfirmed);
            }
        })
        const lineChartData = [
            { name: 'Deaceased', data: deaceased, color: 'crimson' },
            { name: 'Recovered', data: recoverd, color: 'green' },
            { name: 'Confirmed', data: confirmed, color: 'blue' }
        ]
        return lineChartData;
    }

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Covid Data'
        },
        subtitle: {
            text: 'Basic Line Chart'
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'column'
        },
        legend: {
            symbolWidth: 40
        },
        yAxis: {
            title: {
                text: 'Patients'
            }
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            accessibility: {
                description: 'Report of May 2021'
            },
            categories: categories,
            crosshair: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
    
        },
        series: data()
    });
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={chartOptions}
                allowChartUpdate={true}
                immutable={false}
                updateArgs={[true, true, true]}
                containerProps={{
                    className: 'chartContainer'
                }}
            />
        </>
    )
}

export default StackedChart

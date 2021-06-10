import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as timeLineData from '../../Data/timeseries.json';
const FixedPlacement = () => {
    const categories = [];
    const deaceased = [];
    const recoverd = [];
    const confirmed = [];
    const totalDeaceased = [];
    const toatalRecoverd = [];
    const totalConfirmed = [];

    const data = () => {

        timeLineData.default.map((entry, index) => {
            if(index < 3){
                categories.push(entry.Date);
                deaceased.push(entry.DailyDeceased);
                recoverd.push(entry.DailyRecovered);
                confirmed.push(entry.DailyConfirmed);
                totalDeaceased.push(entry.TotalDeceased);
                toatalRecoverd.push(entry.TotalRecovered);
                totalConfirmed.push(entry.TotalConfirmed);
            }
        })
        const lineChartData = [
            { name: 'Confirmed', data: [6999999, 3701000, 6557900], color: 'rgba(165,170,217,1)', pointPadding: 0.3,
            pointPlacement: -0.2 },
            { name: 'Recovered', data: [5999765, 3700900, 3557690], color: 'rgba(248,161,63,1)', pointPadding: 0.3,
            pointPlacement: 0.2},
            { name: 'Total Confirmed', data: totalConfirmed, color: 'rgba(126,86,134,.9)', pointPadding: 0.4,
            pointPlacement: -0.2 },
            { name: 'Total Recovered', data: toatalRecoverd, color: 'rgba(186,60,61,.9)',
            pointPadding: 0.4,
            pointPlacement: 0.2 },
        ];
        console.log(lineChartData)
        return lineChartData;
    }

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Recovered and Confirmed Cases Comparison'
        },
        subtitle: {
            text: 'Fixed Placements'
        },
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
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

export default FixedPlacement

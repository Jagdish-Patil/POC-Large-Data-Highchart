import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as timeLineData from '../../Data/timeseries.json';
const NegativeBar = () => {
    const categories = [];
    const deaceased = [];
    const recoverd = [];
    const confirmed = [];

    const data = () => {

        timeLineData.default.map((entry, index) => {
            if(index < 10){
                categories.push(entry.Date);
                // deaceased.push(entry.DailyDeceased);
                recoverd.push(entry.DailyRecovered * -1);
                confirmed.push(entry.DailyConfirmed);
            }
        })
        const lineChartData = [
            // { name: 'Deaceased', data: deaceased, color: 'crimson' },
            { name: 'Recovered', data: recoverd, color: 'green' },
            { name: 'Confirmed', data: confirmed, color: 'blue' }
        ]
        return lineChartData;
    }

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Covid Cases Confirmed VS Recovered'
        },
        subtitle: {
            text: 'Negative Bar Chart'
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ', Date: ' + this.point.category + '</b><br/>' +
                    'Patients: ' + this.point.y;
            }
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'bar'
        },
        legend: {
            symbolWidth: 40
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            },
            accessibility: {
                description: 'Percentage population',
                rangeDescription: 'Range: 0 to 5%'
            }
        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Recovered'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Confirmed'
            }
        }],
        plotOptions: {
            series: {
                stacking: 'normal'
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

export default NegativeBar

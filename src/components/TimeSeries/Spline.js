import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as timeLineData from '../../Data/timeseries.json';

const Spline = () => {
    const categories = [];
    const deaceased = [];
    const recoverd = [];
    const confirmed = [];

    const data = () => {

        timeLineData.default.map((entry) => {
            categories.push(entry.Date);
            deaceased.push(entry.DailyDeceased);
            recoverd.push(entry.DailyRecovered);
            confirmed.push(entry.DailyConfirmed);
        })
        const lineChartData = [
            { name: 'Deaceased', data: deaceased, color: 'crimson' },
            { name: 'Recovered', data: recoverd, color: '#98FB98' },
            { name: 'Confirmed', data: confirmed, color: '#FFA500' }
        ]
        return lineChartData;
    }



    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Covid Data'
        },
        subtitle: {
            text: 'Spline Chart'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'areaspline',
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        yAxis: {
            title: {
                text: 'Patients'
            },
            accessibility: {
                description: 'Number of Patients'
            }
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            accessibility: {
                description: 'Daily Report of May 2021'
            },
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }],
            categories: categories
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
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

export default Spline

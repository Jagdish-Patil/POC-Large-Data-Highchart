import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as zoomTimeLineData from '../../Data/zoomData.json';

const ZoomableTimeSeries = () => {

    const data = () => {

        const zoomData = zoomTimeLineData.default.map((entry) => {
            return [new Date(entry.Date_YMD).getTime(), entry.DailyConfirmed]
        })
        return zoomData;
    }

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Covid Cases'
        },
        subtitle: {
            text: 'Zoomable TimeSeries'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            zoomType: 'x'
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
            type: 'datetime'
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 1
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'Daily Confirmed Cases',
            data: data()
        }]
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

export default ZoomableTimeSeries

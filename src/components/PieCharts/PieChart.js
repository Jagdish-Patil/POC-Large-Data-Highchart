import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as info from '../../Data/data.json';
require("highcharts/modules/exporting")(Highcharts);

const PieChart = () => {
    const pieColors = () => {
        var colors = [],
            base = '#42C0FB',
            i;
        console.log(base)
        for (i = 0; i < 5; i += 1) {
            colors.push(Highcharts.color(base).brighten((i - 4) / 7).get());
        }
        return colors;
    }

    Highcharts.setOptions({
        colors: pieColors()
    });

    const data = () => {
        const pieChartData = info.default.statewise.map((entry) => {
            return { y: Number(entry.active), name: entry.state }
        })
        return pieChartData;
    }

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Covid Cases'
        },
        subtitle: {
            text: 'Pie Chart'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                showInLegend: true,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                }
            }
        },
        series: [
            {
                type: 'pie',
                name: 'Patients',
                data: data()
            }
        ],
        navigation: {
            buttonOptions: {
                enabled: true
            }
        }
    });
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
        </>
    )
}

export default PieChart

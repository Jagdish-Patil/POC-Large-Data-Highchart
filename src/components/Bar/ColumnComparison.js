import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as info from '../../Data/data.json';

const ColumnComparison = () => {
    const pieColors = () => {
        var colors = [],
            base = '#42C0FB',
            i;

        for (i = 0; i < 5; i += 1) {
            colors.push(Highcharts.color(base).brighten((i - 2) / 7).get());
        }
        return colors;
    }

    Highcharts.setOptions({
        colors: pieColors()
    });

    const data = () => {
        const pieChartData = info.default.statewise.map((entry) => {
            return { y: Number(entry.deaths), name: entry.state }
        })
        return pieChartData;
    }



    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Covid Death Rate'
        },
        subtitle: {
            text: 'Donut Chart'
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
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                },
                borderWidth: 3
            },
            series: {
                animation: false
            }
        },
        series: [
            {
                type: 'pie',
                name: 'Cases',
                innerSize: '50%',
                data: data()
            }
        ]
    });
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={chartOptions}
                allowChartUpdate={true}
                immutable={false}
                updateArgs={[true, true, true]}
                containerProps={{ className: 'chartContainer' }}
            />
        </>
    )
}

export default ColumnComparison
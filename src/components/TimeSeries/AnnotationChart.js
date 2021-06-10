import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as zoomTimeLineData from '../../Data/zoomData.json';

const AnnotaionChart = () => {

    const data = () => {
        // const filteredData = zoomTimeLineData.default.filter(data => data?.DailyDeceased !== 0 )
        const zoomData = zoomTimeLineData.default.map((entry, index) => {
            return [index+1, entry.DailyConfirmed]
        })
        console.log('====================================');
        console.log(zoomData);
        console.log('====================================');
        return zoomData;
    }

    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Death Rate due to COVID'
        },
        subtitle: {
            text: 'Annotation TimeSeries'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'area',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            scrollablePlotArea: {
                minWidth: 600
            }
        },
        legend: {
            symbolWidth: 40
        },
        xAxis: {
            labels: {
                format: '{value}'
            },
            minRange: 5,
            title: {
                text: 'Days'
            },
            accessibility: {
                rangeDescription: 'Range: 0 to 187.8km.'
            }
        },
    
        yAxis: {
            startOnTick: true,
            endOnTick: false,
            maxPadding: 0.35,
            title: {
                text: null
            },
            labels: {
                format: '{value} Cases'
            },
            accessibility: {
                description: 'Days',
                rangeDescription: 'Range: 0 to 1,553 meters'
            }
        },
        annotations: [{
            draggable: '',
            labelOptions: {
                backgroundColor: 'rgba(255,255,255,0.5)',
                verticalAlign: 'top',
                y: 15
            },
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    y: 54298,
                    x: 201
                },
                text: 'Arbois'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 45.5,
                    y: 611
                },
                text: 'Montrond'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 63,
                    y: 651
                },
                text: 'Mont-sur-Monnet'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 84,
                    y: 789
                },
                x: -10,
                text: 'Bonlieu'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 129.5,
                    y: 382
                },
                text: 'Chassal'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 159,
                    y: 443
                },
                text: 'Saint-Claude'
            }]
        }, {
            draggable: '',
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 101.44,
                    y: 1026
                },
                x: -30,
                text: 'Col de la Joux'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 138.5,
                    y: 748
                },
                text: 'Côte de Viry'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 176.4,
                    y: 1202
                },
                text: 'Montée de la Combe <br>de Laisia Les Molunes'
            }]
        }, {
            draggable: '',
            labelOptions: {
                shape: 'connector',
                align: 'right',
                justify: false,
                crop: true,
                style: {
                    fontSize: '0.8em',
                    textOutline: '1px white'
                }
            },
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 96.2,
                    y: 783
                },
                text: '6.1 km climb <br>4.6% on avg.'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 134.5,
                    y: 540
                },
                text: '7.6 km climb <br>5.2% on avg.'
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 172.2,
                    y: 925
                },
                text: '11.7 km climb <br>6.4% on avg.'
            }]
        }],
        // plotOptions: {
        //     area: {
        //         fillColor: {
        //             linearGradient: {
        //                 x1: 0,
        //                 y1: 0,
        //                 x2: 0,
        //                 y2: 1
        //             },
        //             stops: [
        //                 [0, Highcharts.getOptions().colors[0]],
        //                 [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        //             ]
        //         },
        //         marker: {
        //             radius: 1
        //         },
        //         lineWidth: 1,
        //         states: {
        //             hover: {
        //                 lineWidth: 1
        //             }
        //         },
        //         threshold: null
        //     }
        // },
        series: [{
            lineColor: Highcharts.getOptions().colors[1],
            color: Highcharts.getOptions().colors[3],
            fillOpacity: 0.5,
            name: 'Cases',
            marker: {
                enabled: false
            },
            threshold: null,
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

export default AnnotaionChart

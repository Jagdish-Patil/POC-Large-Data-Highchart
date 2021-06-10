import React, { useState, useEffect } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';

const LargeDataTimeSeries = () => {

    const [pointStart, setPointStart] = useState(null);
    const [pointInterval, setPointInterval] = useState(null);
    const [data, setData] = useState(null);
    const [chartOptions, setChartOptions] = useState(null)
    useEffect(()=>{
        axios.get(`https://cdn.jsdelivr.net/gh/highcharts/highcharts@v6.0.0/samples/data/large-dataset.json`)
        .then(res => {
          const {pointStart, pointInterval, data} = res.data;
          console.log("data=======",data);
          setPointStart(pointStart);
          setPointInterval(pointInterval);
          setData(data);
          setChartOptions({
            title: {
                text: 'Large Data'
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
                    text: 'Values'
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    formatter: function() {
                      return Highcharts.dateFormat('%a %d %b', this.value);
                    }
                  }
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
                name: 'Series',
                data: data,
                pointStart: pointStart,
                pointInterval: pointInterval
            }]
        })
        })
    },[])

    
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

export default LargeDataTimeSeries


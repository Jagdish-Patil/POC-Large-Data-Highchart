import React, { useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import * as timeLineData from '../../Data/timeseries.json';

const BasicLine = () => {
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
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
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
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },
        series: data(),
        exporting: {
            buttons: {
                  contextButton: {
                    menuItems: [{
                          textKey: 'printChart',
                          onclick: function () {
                              this.print();
                          }
                      }, {
                          separator: true
                      }, {
                          textKey: 'downloadPNG',
                          onclick: function () {
                              this.exportChart();
                          }
                      }, {
                          textKey: 'downloadJPEG',
                          onclick: function () {
                              this.exportChart({
                                  type: 'image/jpeg'
                              });
                          }
                      }, {
                          separator: true
                      },{
                          textKey: 'downloadPDF',
                          onclick: function () {
                              this.exportChart({
                                  type: 'application/pdf'
                              });
                          }
                      }, {
                          textKey: 'downloadSVG',
                          onclick: function () {
                              this.exportChart({
                                  type: 'image/svg+xml'
                              });
                          }
                      }]
                  }
              }
          }
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

export default BasicLine

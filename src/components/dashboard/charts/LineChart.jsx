import React, { useEffect, useCallback } from 'react';
import Highcharts from 'highcharts';

export default function LineChart({ figureId, data }) {
  const renderChart = useCallback(() => {
    const condition = Boolean(Math.round(Math.random()));

    Highcharts.chart(figureId, {
      chart: {
        type: 'spline',
        zoomType: 'xy',
      },
      title: {
        text: 'Monthly Sales Report',
      },
      // subtitle: {
      //     text:
      //     'Source <a href="https://en.wikipedia.org/wiki/Budget_of_NASA" target="_blank">Wikipedia</a>'
      // },
      credits: {
        enabled: false,
      },
      xAxis: {
        crosshair: true,
        title: {
          text: 'Days',
        },
        type: 'datetime',
        dateTimeLabelFormats: {
          day: condition ? '%e-%b-%y' : '%e%b%y',
          month: condition ? '%b-%y' : "%b '%y",
        },
      },
      yAxis: {
        labels: {
          format: '{point.value}',
        },
        title: {
          text: 'Values',
        },
      },
      plotOptions: {
        series: {
          //   pointStart: '{point.name}',

          marker: {
            enabled: false,
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: 'Sales Count',
          data: [
            [Date.UTC(2023, 10, 1), 20],
            [Date.UTC(2023, 10, 2), 80],
            [Date.UTC(2023, 10, 3), 100],
            [Date.UTC(2023, 10, 5), 120],
            [Date.UTC(2023, 10, 7), 70],
            [Date.UTC(2023, 10, 8), 40],
            [Date.UTC(2023, 10, 10), 150],
            [Date.UTC(2023, 10, 12), 180],
            [Date.UTC(2023, 10, 13), 200],
            [Date.UTC(2023, 10, 16), 130],
            [Date.UTC(2023, 10, 18), 50],
            [Date.UTC(2023, 10, 19), 60],
            [Date.UTC(2023, 10, 20), 80],
            [Date.UTC(2023, 10, 21), 100],
          ],
          tooltip: {
            valueSuffix: '',
          },
        },
      ],
    });
  }, [figureId]);

  useEffect(() => {
    renderChart();
  }, [renderChart]);
  return (
    <div className="consignment-line-chart-main">
      <figure>
        <div id={figureId}></div>
      </figure>
    </div>
  );
}

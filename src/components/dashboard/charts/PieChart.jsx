import Highcharts from 'highcharts';
import React, { useCallback, useEffect } from 'react';

export default function PieChart({ figureId, data }) {
  const renderChart = useCallback(() => {
    Highcharts.chart(figureId, {
      //   colors: ['#e8c880', '#427c99', '#dbaa35', '#585148', '#d4ad9c', '#b4b77b'],
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Product Details',
      },
      subtitle: false,
      credits: {
        enabled: false,
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            // fontFamily: 'Verdana, sans-serif',
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Monthly Sales',
        },
      },
      legend: {
        enabled: true,
      },
      tooltip: {
        pointFormat: 'Total Count: <b>{point.y:.1f}</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name}: {y} %',
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          innerSize: '70%',
          data: [
            {
              name: 'Glossy/60*120',
              y: 40,
            },
            {
              name: 'Matt/60*140',
              y: 50,
            },
            {
              name: 'Glossy/60*60',
              y: 20,
            },
            {
              name: 'Glossy/60*140',
              y: 10,
            },
            {
              name: 'Matt/60*120',
              y: 70,
            },
            {
              name: 'Matt/60*60',
              y: 30,
            },
          ],
        },
      ],
    });
  }, [figureId]);

  useEffect(() => {
    renderChart();
  }, [renderChart]);

  return (
    <div className="consignment-bar-chart-main">
      <figure>
        <div id={figureId} className="consignment-bar-chart"></div>
      </figure>
    </div>
  );
}

import React from 'react';
import PieChart from './charts/PieChart';
import LineChart from './charts/LineChart';

export default function Dashboard() {
  return (
    <div className="consignment-dashboard-main">
      <PieChart figureId="ProductDetailsChart" />
      <LineChart figureId="SalesLineChart" />
    </div>
  );
}

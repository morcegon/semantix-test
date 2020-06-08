import PropTypes from 'prop-types';
import React from 'react';
import { Pie } from 'react-chartjs-2';

import colors from '../../styles/colors';

function Chart({ data }) {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        backgroundColor: [colors.blue3, colors.green2, colors.blue2],
        label: 'Amount',
        data: data.map((item) => item.value),
      },
    ],
  };

  return <Pie data={chartData} options={{ responsive: true }} />;
}

export default Chart;

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

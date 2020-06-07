import PropTypes from 'prop-types';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import colors from '../../styles/colors';

function Chart({ data }) {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        backgroundColor: colors.blue1,
        label: 'Amount',
        data: data.map((item) => item.value),
      },
    ],
  };

  console.log(chartData);

  return <Bar data={chartData} />;
}

export default Chart;

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import PropTypes from 'prop-types';
import React from 'react';
import { Line } from 'react-chartjs-2';

import colors from '../../styles/colors';

function Chart({ data }) {
  const labels = [];
  const dataSets = [];

  const colorData = [colors.blue4, colors.pink1];

  Object.keys(data).forEach((day, index) => {
    const dayData = data[day];

    dayData.forEach((item) => {
      labels.push(item.label);
    });

    dataSets.push({
      label: day,
      data: dayData.map((item) => item.value),
      backgroundColor: 'transparent',
      borderColor: colorData[index],
      lineTension: 0,
    });
  });

  return (
    <Line
      data={{ labels: [...new Set(labels)], datasets: dataSets }}
      options={{ responsive: true }}
    />
  );
}

export default Chart;

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import { Chart } from 'chart.js/auto';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function ChartComponent({ type, data, options }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type,
      data,
      options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
}

ChartComponent.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default ChartComponent;

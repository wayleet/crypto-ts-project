import React, { FC } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export const options = {
	responsive: true,
	scales: {
		x: {
			display: false,
			grid: {
				display: false
			}
		},
		y: {
			display: false,
			grid: {
				display: false
			}
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

interface AreaChartProps {
	chartData: Array<number[]> | undefined;
}
const AreaChart: FC<AreaChartProps> = ({ chartData }) => {
	const data = {
		labels: chartData?.map((element) =>
			moment(element[0]).format('DD.MM.YY')
		),
		datasets: [
			{
				fill: true,
				label: 'Цена',
				data: chartData?.map((element) => element[1]),
				backgroundColor: (context: ScriptableContext<'line'>) => {
					const { ctx } = context.chart;
					const gradient = ctx.createLinearGradient(0, 0, 0, 180);
					gradient.addColorStop(0, '#C1EF00');
					gradient.addColorStop(1, '#232323');
					return gradient;
				}
			}
		]
	};
	return <Line options={options} data={data} width={300} height={100} />;
};

export default AreaChart;

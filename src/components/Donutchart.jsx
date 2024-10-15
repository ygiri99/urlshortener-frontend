import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Donutchart({ data }) {
    const { today, month } = data;
    const xValues = ["Today", "Month"];
    const yValues = [today, month];

    ChartJS.register(ArcElement, Tooltip, Legend)

    const chartData = {

        labels: xValues,
        datasets: [{
            backgroundColor: [
                "#b91d47",
                "#00aba9"
            ],
            data: yValues
        }]
    }

    return (
        <>
            <h3 className='header'>Doughnutchart</h3>
            <Doughnut data={chartData}></Doughnut>
        </>
    )
}

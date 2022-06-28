import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface IDataCPUTopFive {
    dataProps: {
        Name: string;
        Caption: string;
        Manufacturer: string;
        MaxClockSpeed: number;
        NumberOfCores: number;
        Usage: number;
    }
}

function VerticalChart({ dataProps }: IDataCPUTopFive): JSX.Element {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `AVERAGE ${dataProps.Usage} %`,
            },
        },


    };

    const labels = ['TOTAL', 'CPU USAGE %'];
    const data = {
        labels,
        datasets: [
            {
                label: 'TOTAL',
                data: [100, dataProps.Usage],
                backgroundColor: ['rgb(0, 152, 254)', 'rgb(173, 7, 43)'],
            },
        ],
    };

    return (
        <>
            <div >
                <h3 style={{ color: "#ededed" }}>CPU AVERAGE </h3>
                <div style={{ height: '300px', width: '300px', margin: '0 auto' }}>
                    <Card sx={{ minWidth: 500 }}>
                        <CardContent>
                            <Bar options={options} data={data} />
                        </CardContent >
                        <CardActions>
                            <Button size="small">More</Button>
                        </CardActions>
                    </Card >
                </div>
                {/* <p style={{ color: "#ededed", fontWeight: "bold" }}>Average - {dataProps.Usage} %</p> */}
            </div>
        </>
    )

}


export default VerticalChart
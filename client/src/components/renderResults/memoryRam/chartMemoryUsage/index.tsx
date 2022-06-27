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

interface IDataMemory {
    dataProps: {
        TotalRAM: number;
        FreeRAM: number;
    }
}

function VerticalChart({ dataProps }: IDataMemory): JSX.Element {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `TOTAL  ${dataProps.TotalRAM} GB`,
            },
        },
    };

    const labels = [`TOTAL %`, `FREE %`];
    const data = {
        labels,
        datasets: [
            {
                label: `TOTAL ${dataProps.TotalRAM} GB`,
                data: [100],
                backgroundColor: 'rgb(0, 152, 254)',
            },
            {
                label: `FREE ${dataProps.FreeRAM} GB`,
                data: [Number(((dataProps.FreeRAM / dataProps.TotalRAM) * 100).toFixed(2))],
                backgroundColor: 'rgb(173, 7, 43)',
            }
        ],
    };

    return (
        <>
            <div >
                <h3 style={{ color: "#ededed" }}>RAM MEMORY</h3>
                <div style={{}}>
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
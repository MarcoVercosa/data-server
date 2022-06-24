import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

interface IDataDisk {
    dataDisk: {
        driveLetter: string;
        name: string;
        free: number;
        total: number;
        providerName: string
        FreePercent: number
    }
}
function PieChart({ dataDisk }: IDataDisk): JSX.Element {
    const [graph, setGraph] = useState<any>({
        labels: [],
        data: [],
    });

    const graphData: any = [
        {
            label: "Used %",
            value: (100 - dataDisk.FreePercent)
        },
        {
            label: "Free %",
            value: dataDisk.FreePercent
        },
    ];

    useEffect(() => {
        const labels: any[] = [];
        const data: any[] = [];

        graphData?.map((v: any) => {
            labels.push(v?.label);
            data.push(v?.value);
        });
        setGraph({
            labels: labels,
            data: data,
        });
    }, []);

    const data = {
        labels: graph.labels,
        datasets: [
            {
                label: '# of Votes',
                data: graph.data,
                backgroundColor: [
                    'rgba(255, 0, 55, 0.889)',
                    'rgb(0, 153, 255)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    '#fb0a3e',
                    '#0099ff',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className="App">
                <h3 style={{ color: "#ededed" }}>Driver Letter - {dataDisk.driveLetter} / Name - {dataDisk.name} </h3>
                <div style={{ height: '300px', width: '300px', margin: '0 auto' }}>
                    <Pie data={data} />
                </div>
                <p style={{ color: "#ededed", fontWeight: "bold" }}>Total - {dataDisk.total} GB</p>
            </div>
        </>
    );


}

export default PieChart
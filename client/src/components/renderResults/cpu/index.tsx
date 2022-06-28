import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';
import { CPUDataDiv, CPUTopFiveDiv } from './style';
import DataCPU from "./dataCPU"
import CPUTopFive from "./CPUTopFive"
import VerticalChart from "./chartCpuUsage"

interface IDataCPU {
    Name: string;
    Caption: string;
    Manufacturer: string;
    MaxClockSpeed: number;
    NumberOfCores: number;
    Usage: number;
}

interface IDataCPUTopFive {
    value: [
        {
            ProcessName: string,
            ID: number,
            CPU: number,
            UserName: string | null,
            Description: string
        }
    ]
}

function RenderCpu(): JSX.Element {
    const dataComponentSearchBarStore = useSelector(getDataSearchServer)
    const cpuData: IDataCPU = dataComponentSearchBarStore.dataSearch.data[0]
    const cpuDTopFive: IDataCPUTopFive = dataComponentSearchBarStore.dataSearch.data[1]
    return (
        <>
            <CPUDataDiv>
                <div>
                    <VerticalChart dataProps={cpuData} />
                </div>
                <div>
                    <DataCPU data={cpuData} />
                </div>
            </CPUDataDiv>
            <h3 style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "5%" }}>CPU TOP FIVE</h3>
            <CPUTopFiveDiv>

                <CPUTopFive data={cpuDTopFive} />
            </CPUTopFiveDiv>
        </>
    );
}

export default RenderCpu;

import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';
import { getSearchBarHeaderComponent } from "../../../redux/reducers/searchBarHeaderComponent"
import VerticalChart from './chartMemoryUsage';
import { MemoryDataDiv, MemoryTopFiveDiv } from "./style"
import MemoryTopFive from "./MemoryTopFive/"

interface IDataMemory {
    TotalRAM: number;
    FreeRAM: number;
}

interface IDataMemoryTopFive {
    value: [
        {
            Name: string,
            Id: number,
            CPU: number,
            ProcessGB: number
        }
    ]
}


function RenderMemoryRam(): JSX.Element {
    const dataComponentSearchBarStore = useSelector(getDataSearchServer)
    const memoryData: IDataMemory = dataComponentSearchBarStore.dataSearch.data[0]
    const memoryTopFive: IDataMemoryTopFive = dataComponentSearchBarStore.dataSearch.data[1]
    return (
        <>
            <MemoryDataDiv>
                <div>
                    <VerticalChart dataProps={memoryData} />
                </div>
            </MemoryDataDiv>
            <h3 style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "5%" }}>RAM MEMORY TOP FIVE</h3>
            <MemoryTopFiveDiv>

                <MemoryTopFive data={memoryTopFive} />
            </MemoryTopFiveDiv>
        </>

    );
}

export default RenderMemoryRam;

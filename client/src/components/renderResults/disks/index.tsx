import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';
import { getSearchBarHeaderComponent } from "../../../redux/reducers/searchBarHeaderComponent"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PieChart from "./charts"
import DiskDetail from "./diskDetail"
import { DataDiskStyle, DiskDetailDiv } from "./style"
ChartJS.register(ArcElement, Tooltip, Legend);

interface IDataDisk {
    driveLetter: string;
    name: string;
    free: number;
    total: number;
    providerName: string
    FreePercent: number
}
interface IDetailDisk {
    DeviceId: string
    MediaType: string
    BusType: string
    OperationalStatus: string
    SizeGB: number
    HealthStatus: string
}

function RenderDisk(): JSX.Element {
    const dataComponentSearchBarStore: any = useSelector(getDataSearchServer)
    const dataDisk: IDataDisk[] = dataComponentSearchBarStore.dataSearch?.data[0]?.value
    const dataDiskDetail: IDetailDisk[] = dataComponentSearchBarStore.dataSearch?.data[1]?.value
    const { serverName } = useSelector(getSearchBarHeaderComponent)
    console.log(dataDisk)
    return (
        <>
            <DataDiskStyle>
                {dataDisk.map((datas: IDataDisk, index: number) => {
                    return (
                        <div>
                            <PieChart dataDisk={datas} />
                        </div>
                    )
                })}
            </DataDiskStyle>
            {
                dataDiskDetail.map((datas: IDetailDisk, index: number) => {
                    return (
                        <DiskDetailDiv>
                            <div>
                                <DiskDetail data={datas} />
                            </div>
                        </DiskDetailDiv>
                    )
                })
            }

        </>
    )
}
export default RenderDisk;



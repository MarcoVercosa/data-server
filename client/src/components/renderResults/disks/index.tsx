import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PieChart from './chartDisk';
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
    const dataComponentSearchBarStore = useSelector(getDataSearchServer)
    let dataDisk: IDataDisk[] = dataComponentSearchBarStore.dataSearch?.data[0]?.value
    if (dataDisk === undefined || dataDisk === null) { dataDisk = [dataComponentSearchBarStore.dataSearch?.data[0]] }
    //em raros casos, se há somente um disco, o resultado não vem no objeto value, por isso faz a verificação e tranforma em array (que é o padrão)
    let dataDiskDetail: IDetailDisk[] = dataComponentSearchBarStore.dataSearch?.data[1]?.value
    if (dataDiskDetail === undefined || dataDisk === null) { dataDiskDetail = [dataComponentSearchBarStore.dataSearch?.data[1]] }
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



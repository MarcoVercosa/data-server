import React from 'react'
import { useSelector } from "react-redux"
import { getDataSearchServer } from '../../../redux/reducers/dataSearchServer';


function RenderInventory(): JSX.Element {
    const dataComponentSearchBarStore = useSelector(getDataSearchServer)
    const inventory: any = dataComponentSearchBarStore.dataSearch.data

    return (
        <header className="App-header">
            <div dangerouslySetInnerHTML={{ __html: inventory }}></div>
        </header>

    );
}

export default RenderInventory;

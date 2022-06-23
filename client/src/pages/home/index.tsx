import React, { useState } from 'react'
import HeaderComponent from '../../components/header';
import { GetDataBackEndPost } from '../../fetch/fetchBackEnd';
import { useDispatch, useSelector } from "react-redux"
import { getSearchBarHeaderComponent, changeSelectOption, changeServerName } from '../../redux/reducers/searchBarHeaderComponent';
import { changeDataSearchServer } from '../../redux/reducers/dataSearchServer';
import RenderAdmGroup from "../../components/renderResults/admGroup"
import RenderCluster from "../../components/renderResults/cluster"
import RenderCpu from "../../components/renderResults/cpu"
import RenderDisk from "../../components/renderResults/disks"
import RenderInventory from "../../components/renderResults/inventory"
import RenderLocalUsers from "../../components/renderResults/localUsers"
import RenderMemoryRam from "../../components/renderResults/memoryRam"
import './index.css';

interface IRender {
  renderDisk: boolean,
  renderCluster: boolean,
  renderRamMemory: boolean,
  renderCpu: boolean,
  renderLocalUsers: boolean,
  renderAdmGroup: boolean,
  renderInventory: boolean
}

function Home(): JSX.Element {
  const [server, setServer] = useState<string>("")
  const [dataServer, setDataServer] = useState(Array<any>)
  const dispatch = useDispatch()
  const dataComponentSearchBarStore = useSelector(getSearchBarHeaderComponent)
  const [renderComponent, setRenderComponent] = useState<IRender>({
    renderDisk: false,
    renderCluster: false,
    renderRamMemory: false,
    renderCpu: false,
    renderLocalUsers: false,
    renderAdmGroup: false,
    renderInventory: false
  })

  //this function is called by HeaderComponent
  async function RenderResult(server: string, user: string, pass: string, option: string) {
    dispatch(changeServerName({ serverName: server }))
    GetDataBackEndPost(option, server, user, pass)//find data API
      .then((response: any) => {
        dispatch(changeDataSearchServer({ data: response.data })) //update data found server
        dispatch(changeSelectOption({ selectOption: option }))  // update option selected, used by rendering component bellow
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  return (
    <header className="App-header">
      <HeaderComponent RenderResult={RenderResult} />
      {dataComponentSearchBarStore.selectOption === "disks" &&
        <RenderDisk />
      }
      {dataComponentSearchBarStore.selectOption === "cluster" &&
        <RenderCluster />
      }
      {dataComponentSearchBarStore.selectOption === "rammemory" &&
        <RenderMemoryRam />
      }
      {dataComponentSearchBarStore.selectOption === "cpu" &&
        <RenderCpu />
      }
      {dataComponentSearchBarStore.selectOption === "localusers" &&
        <RenderLocalUsers />
      }
      {dataComponentSearchBarStore.selectOption === "administratorgroup" &&
        <RenderAdmGroup />
      }
      {dataComponentSearchBarStore.selectOption === "inventory" &&
        <RenderInventory />
      }
    </header>

  );
}
export default Home;

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
import Loading from '../../components/loading';
import './index.css';

function Home(): JSX.Element {
  const dispatch = useDispatch()
  const dataComponentSearchBarStore = useSelector(getSearchBarHeaderComponent)
  const [loading, setloading] = useState<boolean>(false)

  //this function is called by HeaderComponent
  async function RenderResult(server: string, user: string, pass: string, option: string) {
    dispatch(changeSelectOption({ selectOption: "" }))//  if there is any component rendered, force re-render to request loading
    setloading(true)
    dispatch(changeServerName({ serverName: server }))
    GetDataBackEndPost(option, server, user, pass)//find data API
      .then((response: any) => {
        if (response.status == 200) {
          dispatch(changeDataSearchServer({ data: response.data })) //update data found server
          dispatch(changeSelectOption({ selectOption: option }))  // update option selected, used by rendering component bellow
          setloading(false)
        } else {
          alert(`Error: ${response.response.data.result || response.response.data.name}`)
          setloading(false)
        }
      })
      .catch((err: any) => {
        alert(`Error: ${err.response.data.result}`)
        setloading(false)
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

      {loading &&
        <Loading />
      }
    </header>

  );
}
export default Home;

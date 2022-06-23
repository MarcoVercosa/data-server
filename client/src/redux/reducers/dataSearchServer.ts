import { createSlice } from "@reduxjs/toolkit";
import { IChangeDataSearchServer } from "../interfaces/redux.interfaces"

interface IInitialState {
    dataSearch: any
}

const initialState: IInitialState = {
    dataSearch: ""
}

const dataSearchServer = createSlice({

    name: "dataSearchServer",
    initialState,
    reducers: {
        changeDataSearchServer: (state: IInitialState, { payload }: IChangeDataSearchServer): void => {
            state.dataSearch = payload
        }
    }
})
//exporta os reducers para serem usados nos componentes com o dispatch
export const { changeDataSearchServer } = dataSearchServer.actions
//exporta uma func q pega todo o estado da "Store" e retornna somente o da tela incial
export const getDataSearchServer = (state: any) => state.storeDataSearchServer
//export to store
export default dataSearchServer.reducer
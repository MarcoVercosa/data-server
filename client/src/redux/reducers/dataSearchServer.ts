import { createSlice } from "@reduxjs/toolkit";
import { IChangeDataSearchServer } from "../interfaces/redux.interfaces"

interface IInitialState {
    dateTime: string;
    dataSearch: any
}

const initialState: IInitialState = {
    dateTime: "",
    dataSearch: {
        data: []
    }
}

const dataSearchServer = createSlice({

    name: "dataSearchServer",
    initialState,
    reducers: {
        changeDataSearchServer: (state: IInitialState, { payload }: IChangeDataSearchServer): void => {
            let date = new Date();
            state.dateTime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} > ${date.getHours()}hs:${date.getMinutes()}mins`
            state.dataSearch = payload
        }
    }
})
//exporta os reducers para serem usados nos componentes com o dispatch
export const { changeDataSearchServer } = dataSearchServer.actions
//exporta uma func q pega todo o estado da "Store" e retornna somente o da tela incial
export const getDataSearchServer = (state: any) => state.storeDataSearchServer as IInitialState
//export to store
export default dataSearchServer.reducer
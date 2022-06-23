import { createSlice } from "@reduxjs/toolkit";
import { IChangeOpenCloseUserPassModal, IChangeSelectOption, IChangeServerName } from "../interfaces/redux.interfaces"

interface IInitialState {
    selectOption: string,
    serverName: string
    openCloseUserPassModal: boolean,
}

const initialState: IInitialState = {
    selectOption: "",
    serverName: "",
    openCloseUserPassModal: false,
}

const searchBarHeaderComponent = createSlice({

    name: "searchBarHeaderComponent",
    initialState,
    reducers: {
        changeSelectOption: (state: IInitialState, { payload }: IChangeSelectOption): void => {
            state.selectOption = payload.selectOption
        },
        changeServerName: (state: IInitialState, { payload }: IChangeServerName): void => {
            state.serverName = payload.serverName
        },
        changeOpenCloseUserPassModal: (state: IInitialState, { payload }: IChangeOpenCloseUserPassModal): void => {
            state.openCloseUserPassModal = payload.open
        },
    }
})
//exporta os reducers para serem usados nos componentes com o dispatch
export const { changeSelectOption, changeServerName, changeOpenCloseUserPassModal } = searchBarHeaderComponent.actions
//exporta uma func q pega todo o estado da "Store" e retornna somente o da tela incial
export const getSearchBarHeaderComponent = (state: any): IInitialState => state.storeSearchBarHeaderComponent
//export to store
export default searchBarHeaderComponent.reducer
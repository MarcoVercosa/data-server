export interface IChangeSelectOption {
    payload: {
        selectOption: string
    }
}
export interface IChangeServerName {
    payload: {
        serverName: string
    }
}

export interface IChangeOpenCloseUserPassModal {
    payload: {
        open: boolean
    }
}
export interface IChangeDataSearchServer {
    payload: {
        data: any
    }
}

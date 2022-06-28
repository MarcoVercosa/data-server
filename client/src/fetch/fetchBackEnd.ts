import axios from "axios"

let local = "localhost"

async function GetDataBackEndPost(url: string, server: string, user: string, pass: string) {

    try {
        const result = await axios.post(`http://${local}:3333/data/${url}`, {
            server,
            user,
            pass
        })
        return result
    } catch (error) {
        return error
    }
}

export { GetDataBackEndPost }
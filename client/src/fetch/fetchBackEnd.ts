import axios from "axios"

let local = "localhost"

async function GetDataBackEndPost(url: string, server: string, user: string, pass: string) {
    const resultado = await axios.post(`http://${local}:3333/data/${url}`, {
        server,
        user,
        pass
    })
    //console.log(resultado)
    return resultado
}

export { GetDataBackEndPost }
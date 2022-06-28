import { Request, Response } from "express";
import { Router } from "express"
import { PowerShell } from 'node-powershell';

interface IParamsBody {
    server: string;
    user: string;
    pass: string;
}

const ps = new PowerShell({
    debug: false,
    //throwOnInvocationError: true,
    executableOptions: {
        '-ExecutionPolicy': 'Bypass',
        '-NoProfile': true,
    },
});
const ramMemoryRoute = Router()
ramMemoryRoute.post("/rammemory", async (request: Request, response: Response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    try {
        const { server, user, pass }: IParamsBody = request.body
        const scriptCommand = PowerShell.command`src/scripts/ramMemory/start.ps1 ${server} ${user} ${pass}`
        const result = await ps.invoke(scriptCommand);
        let getResult = await JSON.parse(result.raw)
        if (getResult.message === "error") {
            response.status(501).json(getResult)
            return
        }
        response.status(200).json(getResult)
    } catch (err: unknown) {
        response.status(501).json(err)
    }
})
export { ramMemoryRoute }
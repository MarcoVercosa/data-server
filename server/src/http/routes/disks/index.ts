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

const disksRoute = Router()
disksRoute.post("/disks", async (request: Request, response: Response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    try {
        const { server, user, pass }: IParamsBody = request.body
        const scriptCommand = PowerShell.command`src/scripts/disks/start.ps1 ${server} ${user} ${pass}`
        const result = await ps.invoke(scriptCommand);

        response.json(JSON.parse(result.raw))
    } catch (err: unknown) {
        response.send(`<h1>Internal error:  ${err}</h1>`)
    }
})
export { disksRoute }
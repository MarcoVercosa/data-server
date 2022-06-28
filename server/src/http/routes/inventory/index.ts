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

const inventoryRoute = Router()
inventoryRoute.post("/inventory", async (request: Request, response: Response) => {
    try {
        const { server, user, pass }: IParamsBody = request.body
        const scriptCommand = PowerShell.command`src/scripts/inventory/start.ps1 ${server} ${user} ${pass}`
        const result = await ps.invoke(scriptCommand);
        if (result.raw === "error") {
            response.status(501).json({ result: `Server ${server} is not accessible or credentials are incorrect` })
            return
        } else {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.status(200).send(result.raw)
        }
    } catch (err: unknown) {
        response.status(501).json(err)
    }
})
export { inventoryRoute }

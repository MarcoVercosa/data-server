import { Request, Response, NextFunction } from "express";
import express from "express"
import cors from 'cors'
import { inventoryRoute } from "./inventory";
import { disksRoute } from "./disks";
import { cpuRoute } from "./cpu";
import { ramMemoryRoute } from "./ramMemory";
import { localUsersRoute } from "./localUsers";
import { administratorGroupRoute } from "./administratorGroup";

const Router = express()

// Router.use((req: Request, res: Response, next: NextFunction) => {
//     //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "*");
//     //Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     Router.use(cors({
//         origin: "*",
//     }));
//     next();
// });

Router.use("/data", inventoryRoute, disksRoute, cpuRoute, ramMemoryRoute, localUsersRoute, administratorGroupRoute)

export { Router }
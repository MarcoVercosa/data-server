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


Router.use("/data", inventoryRoute, disksRoute, cpuRoute, ramMemoryRoute, localUsersRoute, administratorGroupRoute)

export { Router }
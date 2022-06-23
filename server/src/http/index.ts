import express from "express"
const startServer = express()
import cors from 'cors'
import { Router } from "./routes";


startServer.use(cors({
    origin: "*",
    methods: ['POST']
}));


startServer.use(express.json())
startServer.use(Router)
startServer.listen(3333, () => console.log('server running on port 3333'))

import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"


export function createApp() { 
    const app = express()

    app.use(
        cors({
            origin: process.env.FRONTEND_ORIGIN,
            credentials: true 
        })
    )

    app.use(express.json({}))
    app.use(cookieParser())

    // all the route placeholder

    
    return app 
}


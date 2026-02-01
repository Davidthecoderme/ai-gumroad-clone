import dotenv from 'dotenv'
import { connectMongo } from "./db";
import { createApp } from "./app";


async function main() { 
    dotenv.config()
    await connectMongo();

    const app = createApp();

    app.listen(process.env.PORT, () => { 
        console.log("api is running")
    });




}

main().catch(err =>{
    console.error("something is failed", err);
    process.exit(1);
})
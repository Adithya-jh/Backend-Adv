import { createClient } from "redis";

const client = createClient();

async function startWorker() {
    await client.connect()
    while (1) {
        const submission = await client.brPop("problems",0);
        console.log( submission);
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Submission processed");
        
    }

}

startWorker()
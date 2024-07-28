import { PubSubManager } from "./PubsubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)

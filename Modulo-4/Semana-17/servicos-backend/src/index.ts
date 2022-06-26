import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import registerAddress from "./endPoint/registerAddress";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/anddress", registerAddress)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

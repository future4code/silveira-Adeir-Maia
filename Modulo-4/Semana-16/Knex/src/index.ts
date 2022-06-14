import express, { Express, Request, Response } from "express";
import cors from "cors";
import {AddressInfo} from "net";
import { averageWage, deleteActor, getActorByGender, getActorByName, upadateSalary } from "./functions";

const app:Express = express();
app.use(express.json());
app.use(cors());

app.get("/Actor/:name", async (req:Request,res:Response)=> {
    try {
        const data = await getActorByName(req.params.name)
        res.status(200).send({response: {data: data[0]}})
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/Actor", async (req:Request,res:Response)=> {
    try {
        const data = await getActorByGender(req.query.gender)
        res.status(200).send({response: {data: data[0]}})
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/Actor/averageWage/:gender", async (req:Request,res:Response) => {
    try {
        const data = await averageWage(req.params.gender)
        res.status(200).send({response: {data: data[0]}})
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


app.put("/Actor/:id/:salary", async (req:Request,res:Response) => {
    try {
        await upadateSalary(req.params.salary,req.params.id)
        res.status(200).send(`salário atualizado`)
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.delete("/Actor/:id", async (req:Request,res:Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send("Ator Deletado")
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

const server = app.listen(process.env.PORT || 3005,() => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is runnning in http://localhost: ${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})
import express from "express";
import { PORT } from "./config.js";
import { request } from "http";

const app = express();

app.get('/' , (request , response) =>
{
    console.log(request);
    return response.status(234).send('Welcome');
});

app.listen(PORT,()=>
{
    console.log(`App is listening to the port: ${PORT}`);

});
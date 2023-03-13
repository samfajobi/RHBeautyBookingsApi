import express, { Application } from "express";

const app: Application = express();

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`)
})


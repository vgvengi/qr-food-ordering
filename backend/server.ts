import express from "express";
import cors from 'cors';
import  "dotenv/config"

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const PORT =process.env.DB_PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
export default app;
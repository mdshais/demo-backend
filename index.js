import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js"
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use("/products", productRoutes)

app.listen(port, () => {
    console.log(`Server is listening on ${port}.....`);
})
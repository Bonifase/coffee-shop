import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

dotenv.config();

// rest of the code remains same
const app = express();
const PORT = 8080;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
import express from 'express';
import { json, urlencoded } from 'body-parser';
import routes from "./routes";

const app = express();

const port = process.env.PORT || 5000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api',routes)
 

app.listen(port, () => console.log(`Listening on port ${port}`));
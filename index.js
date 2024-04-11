import express from "express";
import bodyParser from 'body-parser';
import mysql from 'mysql';
import userRoutes from './routes/users.js'

const app = express();
const PORT = 5000

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('HELLO FROM CRUD')
})

app.get('/user', (req, res) => {
    res.send("User Page")
})

app.use('/users', userRoutes);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

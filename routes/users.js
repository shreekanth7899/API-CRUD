import express, { Router } from "express"; //import e
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid"; //import v4
const router = express.Router();

const users = [
    // {
    //     firstname: 'John',
    //     lastname: 'Doe'
    // },
    // {
    //     firstname: 'Sam',
    //     lastname: 'Doe'
    // },
];

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });
    res.send('${user.first_name} has been added to the database');
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser)
})
export default router
import express from 'express';
import fs from 'fs';
import Datastore from 'nedb';
const app = express();
const port = 3000;
app.use(express.static('public'))
app.use(express.json({limit:'1mb'}))

app.get('/api' , (req, res) =>{
    res.json({
        test : '123'
    })
} )

const database = new Datastore('database.db');
database.loadDatabase();
app.post('/api', (req, response) => {
    const data = req.body;
    database.insert(data);
    response.json(data);
});
// database.remove({}, { multi: true });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
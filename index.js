import express from 'express';
import fs from 'fs';
import Datastore from 'nedb';
const app = express();
const port = 3000;
app.use(express.static('public'))
app.use(express.json({limit:'1mb'}))

const database = new Datastore('database.db');
database.loadDatabase();
app.post('/api', (req, response) => {
    const data = req.body;
    database.insert(data);
    // Respond with JSON
    response.json({
        status: 'Success',
        latitude: data.latitude,
        longitude: data.longitude,
        timestamp: data.CurrentDate,
        favAni: data.favAni
    });
});
// database.remove({}, { multi: true });

  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 



// const arr = [`Latitude : ${data.latitude}`, `Longitude : ${data.longitude}`];
//     console.log(arr);

//     // Convert the array to a string
//     const arrString = JSON.stringify(arr);

//     // Check if the file already exists
//     const fileName = 'mayur.json';
//     if (fs.existsSync(fileName)) {
//         // Append data to the existing file with a newline character
//         fs.appendFile(fileName, `${arrString}\n`, (err) => {
//             if (err) throw err;
//             console.log("Data appended to the existing file");
//         });

//         response.json({
//             FileStatus: "File already exists, and data is appended to it"
//         });
//     } else {
//         // Create a new file and write the data
//         fs.writeFile(fileName, `${arrString}\n`, (err) => {
//             if (err) throw err;
//             console.log("New file created, and data has been saved");
//             response.json({
//                 FileStatus: "New file created, and data has been saved"
//             });
//         });
//     }
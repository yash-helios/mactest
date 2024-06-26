const express = require('express');
const os = require('os');
const cors=require('cors');
const app = express();
const port = 3000;


app.use(cors());

app.get('/mac-address', (req, res) => {
    const networkInterfaces = os.networkInterfaces();
    const macAddresses = [];

    for (let interface in networkInterfaces) {
        networkInterfaces[interface].forEach(details => {
            if (!details.internal) {
                macAddresses.push(details.mac);
            }
        });
    }
    res.send(macAddresses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require("express")
const data = require("./data.json")

const app = express();
app.get('/api/data', (req, res) => res.json(data));
app.listen(8888, () => console.log('Server running on port 8888'));

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const PORT = 8082;


app.use(cors());

// Middleware to parse JSON request body
app.use(bodyParser.json());

app.get('/get_sample_json', async (req, res) => {
  res.status(200).json({ message: 'test json message' });

});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

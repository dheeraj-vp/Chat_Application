const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*app.post('/message', (req, res) => {
    const userMessage = req.body.message;
    console.log(`Received message: ${userMessage}`);

    const serverReply = `Server reply to: ${userMessage}`;
    res.json({ reply: serverReply });
});*/

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Rahmat, ${name}! Xabaringiz qabul qilindi.`);
});

app.listen(3000, () => {
    console.log('Server http://localhost:3000 manzilida ishlamoqda');
});
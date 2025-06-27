const express = require('express');
const path = require('path');

app.use(express.static(path.join(__dirname, 'stylesheets')));


const app = express();
const hostname = '127.0.0.1'; //localhost
const port =  8005;

app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/contact/submit', (req, res) => {
  const { name, message } = req.query;

  if (!name || !message) {
    return res.status(400).send(`
      <h1>Error<h/1>
      <p>Name and message are required.</p>
      <a href="/contact">Go Back</a>
      `);
  }

  res.send(`
    <h1>Thank you, ${name}!</h1>
    <p>We have received your message: "${message}"</p>
    <a href="/">Go Back to Home</a>
  `);
});

// Start server
app.listen(port, hostname, () => {
  console.log(`Server is running on http://hostname:${port}/`);
});

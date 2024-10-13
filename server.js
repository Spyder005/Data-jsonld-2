const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors({ origin: true, credentials: true }));


app.use('/data', express.static(path.resolve(__dirname, 'data')));


app.get('/blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'blog.jsonld'));
});

app.get('/jobposting', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'jobposting.jsonld'));
});

app.get('/testimonial', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'testimonial.jsonld'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'about.jsonld'));
});

app.get('/industries', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'industries.jsonld'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'services.jsonld'));
});

app.get('/faqs', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'faqs.jsonld'));
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

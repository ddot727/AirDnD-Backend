const express = require('express');
const server = express()

server.use(express.json());

server.get('/', (req, res) => {
  res.send('All good!')
});

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`***Server running on port ${port}***`)
})
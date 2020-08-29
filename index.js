const express = require('express');
const server = express();
const db = require('./config/knexConfig');

const port = process.env.PORT || 5000

server.use(express.json());

server.get('/', async (req, res) => {
  const results = await db('hopes')
  return res.status(200).json(results)
});

server.listen(port, () => {
  console.log(`***Server running on port ${port}***`)
})
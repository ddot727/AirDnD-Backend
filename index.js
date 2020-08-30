const express = require('express');
const server = express();
const db = require('./config/knexConfig');
const hopesRoute = require('./api/hopeRoutes');
const dreamsRoute = require('./api/dreamsRoutes');


const port = process.env.PORT || 5000

server.use(express.json());

server.use('/api/hopes', hopesRoute)
server.use('/api/dreams', dreamsRoute)


server.get('/', async (req, res) => {
  const results = await db('hopes')
  return res.status(200).json(results)
});

server.listen(port, () => {
  console.log(`***Server running on port ${port}***`)
})
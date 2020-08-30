const express = require('express');
const router = express.Router();
const db = require('../config/knexConfig');


router.get('/', async (req, res) => {
  try {
    const result = await db('dreams')
    res.status(200).json(result)
  } catch (err) {
    console.log(`*_*_*_*${e}*_*_*_*`)
    res.status(500).json({
      message: '500 <-> Internal Service Error'
    })
  }
})


module.exports = router
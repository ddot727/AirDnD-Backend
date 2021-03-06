const express = require('express');
const router = express.Router();
const db = require('../config/knexConfig');

router.get('/', async (req, res) => {
  try {
    const result = await db('dreams')
    res.status(200).json(result)
  } catch (err) {
    console.log(`*_*_*_*${err}*_*_*_*`)
    res.status(500).json({
      message: '500 <-> Internal Service Error'
    })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  const { title, description } = body

  if (!title && !description) {
    return res.status(400).json({
      message: 'Bad request bb'
    })
  }

  try {
    const result = await db('dreams')
      .where({ id })
      .update(body)
    result === 1
      ? res.status(200).json(result)
      : res.status(404).json({ message: '404' })
  } catch (err) {
    console.log(`*_*_*_*${err}*_*_*_*`)
    res.status(500).json({
      message: '500 <-> Internal Service Error'
    })
  }
})


module.exports = router
const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const { get } = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const value = await get('todo_count')

  res.status(200).json({ 'added_todos' : value ? Number(value) : 0 });
});

module.exports = router;

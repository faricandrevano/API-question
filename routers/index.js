const express = require('express');
const router = express.Router();
const questionRoute = require('./Question');
const answerRoute = require('./Answer');
const commentRoute = require('./Comment');

router.get('/',(req,res) => {
	res.send('Welcome to staclovers')
})
router.use('/question',questionRoute)
router.use('/answer',answerRoute);
router.use('/comment',commentRoute);



module.exports = router;
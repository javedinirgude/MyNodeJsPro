var express = require('express');
var router = express.Router();
var user = require('../models/User');
var todo = require('../models/Todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 // ###################
// It is demo app thats why I have used here all get methods else we can use post also
//####################

router.get('/getUSerDetails/:userId', function(req, res, next) {
    user.getUserDetail(req.query.userId);
});
router.get('/getTodo/:toDoId', function(req, res, next) {
    todo.getToDO(req.query.toDoId);
});

router.get('/getAllUserWithTodo', function(req, res, next) {
    user.getAllUserWithTodo();
});

router.get('/getUserTodoByDate/:userId/:startDate/:endDate', function(req, res, next) {
    todo.getToDosByuserIdAndDate(req.query.userId,req.query.startDate,req.query.endDate);
});
module.exports = router;

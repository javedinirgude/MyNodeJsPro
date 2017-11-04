
var userManager = require('../manager/userManager');
var user = {
    getUserDetail : function (userId) {
       var data = userManager.getUserDetails(userId,function (err,data) {
           return data;
       });
    },
    getAllUserWithTodo : function () {
        var data = userManager.getAllUserAndTodos(function (err,data) {
            return data;
        });
    }
};

module.exports = user;
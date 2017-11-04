
var todoManager = require('../manager/userManager');
var todo = {
    getToDO : function (toDoId) {
        var data = todoManager.getTodo(toDoId,function (err,data) {
            return data;
        });
    },
    getAllTodoByUserId : function (userid) {
        var data = todoManager.getTodoByUserId(userid);
        return data;
    },
    getToDosByuserIdAndDate : function () {
        var data = todoManager.getToDosByuserIdAndDate(userid);
        return data;
    }
};

module.exports = todo;
var toDoDummyRecords  = require('../UserDummyRecords');
var todoManager = {

    getTodo: function (todoId,cb) {
      /*  mysqlconnection.query('select * from Todos where id  ='+todoId, function (error, results, fields) {
            if (error) throw error;
            return results;
        });*/
        var data = toDoDummyRecords[todoId];
        if(cb){
            cb(null,data);
        }

    },
    getTodoByUserId : function (userid) {

        mysqlconnection.query('select * from Todos where userid  ='+userid, function (error, results, fields) {
            if (error) throw error;
            return results;
        });
    },
    getToDosByuserIdAndDate : function (userid ,startDate ,endDate) {
        mysqlconnection.query('select * from Todos where userid  ='+userid+'targetDate between '+startDate+'+'+endDate, function (error, results, fields) {
            if (error) throw error;
            return results;
        });
    }
};

module.exports = userManager;
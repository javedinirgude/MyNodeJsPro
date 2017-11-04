var userDummyRecords  = require('../UserDummyRecords');
var mysql = require('mysql');

var userManager = {

    getUserDetails: function (user,cb) {
        mysqlconnection.query('select * from Todos t , User u where t.id = u.userid', function (error, results, fields) {
            if (error) throw error;
            if(cb){
                cb(null,results);
            }
        });


    },
    getAllUserAndTodos : function () {
        mysqlconnection.query('select * from Todos t , User u where t.id = u.userid', function (error, results, fields) {
            if (error) throw error;
            return results;
        });
    }
};

module.exports = userManager;
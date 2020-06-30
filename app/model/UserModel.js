var sql = require('./db.js');
const bcrypt = require("bcrypt");
//OBJ object constructor
var OBJ = function () { };
OBJ.authenticateAdmin = function authenticateAdmin(body, result) {
    sql.query("Select first_name,last_name from users where email = ?", body['email'], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            var obj = {
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbmFkbWluIiwiaWF0IjoxNTU2NjM3MTMyLCJleHAiOjE1NTY2NDA3MzIsIm5iZiI6MTU1NjYzNzEzMiwianRpIjoiN3ZxWjB0bjlKVXc2c0JQUiIsInN1YiI6MjMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.DMh5DzYEY4Jd2XzmnPp8phx4F5fd5hXGgUQEYKdtfMc",
                infoUser: {
                    name: "opca opca",
                    user_id: "eyJpdiI6InhqdlVsOHhcL2ZyZThpaG1YaGRmdWdBPT0iLCJ2YWx1ZSI6IjAyRk1RY1kxaWI3elY0N1BaV1wvUVZnPT0iLCJtYWMiOiJmZDI4NjQzMTVjY2Q2NmMxMmQ3MzY1NDJmMTQyOGM4NTMwZmJjMTEzNjRlODJiYTY1OTliZGNiNDg5MDYyNWJmIn0",
                    admkyu: "0",
                    company_id: "eyJpdiI6IlJJeVlmNW5DeE9TZlZsM0tXbGZOeXc9PSIsInZhbHVlIjoiVUx5dXJsWUxnOVViYW5JWDlObVh4Zz09IiwibWFjIjoiMTQyNWZmMmI2ZDQ0NDA2OTY0YWJlYTMzOTA5YjMxMDMzOGM4MWEzZDU5ZjdhNmU4NjZmYjMyZDBkNzk2YjRmNiJ9",
                    company_logo: "logoDefi.png",
                    company_name: "dsi"
                }
            };
            // console.log("Le Resultat est : ", res);
            result(null, obj);
        }
    });
};
OBJ.register = function register(body, headers, result) {
    sql.query("Select first_name,last_name from users where email = ?", body['email'], function (err, res) {
        console.log(headers['host'])
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            var obj = {
                auth: "true",
                token: "token",
            };
            result(null, obj);
        }
    });
    bcrypt.hash(body['password'], 10, function (err, hash) {
        console.log(hash);
        result(hash);
    });
};
module.exports = OBJ;
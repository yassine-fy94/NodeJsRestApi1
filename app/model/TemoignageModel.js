var sql = require('./db.js');

//OBJ object constructor
var OBJ = function () { };

OBJ.getAllTemoignage = function getAllTemoignage(result) {
    sql.query("Select * from temoignages", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('temoignages : ', res);  
            result(null, res);
        }
    });

};

OBJ.searchTemoignages = function searchTemoignages(result) {
    sql.query("Select * from temoignages where company_id=1 and deleted_at is null order by id limit 100 offset 0", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            // console.log('temoignages : ', res);  
            var test = {
                data: res,
                total: "10"
            };
            result(null, test);

            // console.log(res)

        }
    });

};

OBJ.authenticateAdmin = function createUser(newOBJ, result) {    
        sql.query("INSERT INTO OBJs set ?", newOBJ, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};


OBJ.getOBJById = function createUser(OBJId, result) {
        sql.query("Select OBJ from OBJs where id = ? ", OBJId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });   
};
OBJ.getAllOBJ = function getAllOBJ(result) {
        sql.query("Select * from temoignages", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('temoignages : ', res);  

                 result(null,JSON.stringify(res));
                result(null,res);
                }
            });   
};
OBJ.updateById = function(id, OBJ, result){
  sql.query("UPDATE OBJs SET OBJ = ? WHERE id = ?", [OBJ.OBJ, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
OBJ.remove = function(id, result){
     sql.query("DELETE FROM OBJs WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            }); 
};

module.exports = OBJ;
var ObjM = require('../model/UserModel.js');

exports.authenticateAdmin = function(req, res) 
{

    //handles null error 
     if(!req.body)
     {
      res.status(400).send({ error:true, message: 'Please provide Email' });
     }
  
    else
    {
        ObjM.authenticateAdmin(req.body, function(err, data) {
        
        if (err)
        {
          res.send(err);
        }
        else
        {
          res.json(data);
        }
      });

    } // fin else

   };


   exports.register = function(req, res) 
{

    //handles null error 
     if(!req.body)
     {
      res.status(400).send({ error:true, message: 'Please provide Email' });
     }
  
    else
    {

        ObjM.register(req.body,req.headers, function(err, data) {
        
        if (err)
        {
          res.send(err);
        }
        else
        {
          res.json(data);

        }
      });

    } // fin else

   };




  
   
  
var express    = require('express');        // call express
var router = express.Router();
exports.router = router;

router.route('/').get(function(req, res, next){
	req.getConnection(function(err,connection){
		var allmerek = [];
		connection.query('SELECT * FROM merek',function(err,rows){
			if(err)
				console.log("Error Selecting : %s ",err );
			allmerek=rows;
		});
		

		connection.query('SELECT * FROM model',function(err,rows)     {

			var retarray;

			if(err)
				console.log("Error Selecting : %s ",err );

			var o = {};
			for (var i=0;i<allmerek.length;i++){
				o[allmerek[i].nama_merek]=[];
			}
			var group_model = function(x){
			    var key = x.nama_merek;

			    if (o[key] === undefined) {
				o[key] = [];
			    };

			    o[key].push(x.model)
			}

			for (var i=0;i<rows.length;i++){
				group_model(rows[i]);
			}

			var retval = [];
			for (var key in o){
				var x = {};
				x["nama_merek"]=key;
				x["model"]=o[key];
				retval.push(x);
			}

			res.json(retval);
		});
       
	});
});

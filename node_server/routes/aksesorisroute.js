var express    = require('express');        // call express
var router = express.Router();
exports.router = router;

router.route('/:nama_merek/:model').get(function(req, res, next){
	var nama_merek = String(req.params.nama_merek);
	var model = String(req.params.model);
	req.getConnection(function(err,connection){

		connection.query('SELECT * FROM aksesoris WHERE nama_merek = ? AND model=?',[nama_merek,model],function(err,rows)     {

			var retarray = [];

			if(err)
				console.log("Error Selecting : %s ",err );

			for (var i=0;i<rows.length;i++){
				var x = {};
				x["id_aksesoris"]=rows[i].id_aksesoris;
				x["nama_aksesoris"]=rows[i].nama_aksesoris;
				x["harga"]=rows[i].harga;
				x["image_path"]=rows[i].image_path;
				retarray.push(x);
			}

			res.json(retarray);
		});
       
	});
});

router.route('/:nama_merek/:model/:id/pilihan').get(function(req, res, next){
	var nama_merek = String(req.params.nama_merek);
	var model = String(req.params.model);
	var id = parseInt(req.params.id);
	if (id==null)
		res.status(422).send("Unprocessable Entity: id should be integer");
	else{
	req.getConnection(function(err,connection){
		connection.query('SELECT id_aksesoris FROM aksesoris WHERE nama_merek = ? AND model=? and id_aksesoris = ?',[nama_merek,model,id],function(err,rows)     {
			var id_aksesoris = [];
			id_aksesoris=rows;
			if (id_aksesoris===undefined){
				res.status(404).send("Not Found");
			}else if (id_aksesoris.length === undefined | id_aksesoris.length===0){
				res.status(404).send("Not Found");
			}
			else{
			connection.query('SELECT pilihan FROM aksesoris_pilihan WHERE id_aksesoris=?',[id],function(err,rows)     {
				var retarr = [];
				for (var i=0;i<rows.length;i++){
					retarr.push(rows[i].pilihan);
				}
				res.json(retarr);
			});  
			}
		});     
	});
		
	}
});
